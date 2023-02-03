<template>
  <Sandpack
    :theme="isDark ? (allThemes[darkTheme as Theme] || 'dark') : (allThemes[lightTheme as Theme] || 'light')"
    :template="template"
    :files="files"
    :rtl="parsedProp(rtl)"
    :options="{
      autorun: parsedProp(autorun),
      editorWidthPercentage: isNaN(Number(editorWidthPercentage)) ? 50 : Number(editorWidthPercentage),
      showNavigator: parsedProp(showNavigator),
      showLineNumbers: parsedProp(showLineNumbers),
      showRefreshButton: parsedProp(showRefreshButton),
      showTabs: parsedProp(showTabs),
      showConsoleButton: parsedProp(showConsoleButton),
      showConsole: parsedProp(showConsole),
      closableTabs: parsedProp(closableTabs),
      wrapContent: parsedProp(wrapContent),
      resizablePanels: parsedProp(resizablePanels),
      readOnly: parsedProp(readOnly),
      showReadOnly: parsedProp(showReadOnly)
    }"
    :custom-setup="customSetup"
  />
</template>

<script setup lang="ts">
import * as allThemes from '@codesandbox/sandpack-themes';
import { getDefaultFileName, getFileAttributes, parsedProp } from './SandpackUtil';
import { renderToString } from 'vue/server-renderer';
import { useData } from 'vitepress';
import { Sandpack, type SandpackFiles, type SandpackPredefinedTemplate } from 'sandpack-vue3';
import { computed, onBeforeMount, ref, useSlots, watch, type VNode } from 'vue';
import type { NpmRegistry } from '@codesandbox/sandpack-client';
import type { Theme, PropBool } from '../types';

// same as src/types.ts -> copy SandboxProp
// can not import from other file, see: https://github.com/vuejs/core/issues/4294
// @ts-ignore
interface SandboxProp {
  /**
   * light theme name
   * @default 'light'
  */
  lightTheme?: Theme;
  /**
   * dark theme name
   * @default 'dark'
  */
  darkTheme?: Theme;
  /**
   * sandbox language
   * @default 'vue3'
  */
  template?: SandpackPredefinedTemplate;
  /**
   * right to left layout
   * @default false
   */
  rtl?: PropBool;

  // options
  /**
   * auto run code
   * @default true
   */
  autorun?: PropBool;
  /**
   * editor div width, default 50 -> 50%
   * @default 50
   */
  editorWidthPercentage?: number | string;
  /**
   * show route navigator in preview area
   * @default false
   */
  showNavigator?: PropBool;
  /**
   * show line numbers in editor file
   * @default false
   */
  showLineNumbers?: PropBool;
  /**
   * show refresh button in preview area
   * @default true
   */
  showRefreshButton?: PropBool;
  /**
   * show tabs in editor area
   * @default true
   */
  showTabs?: PropBool;
  /**
   * show console button in preview area
   * @default true
   */
  showConsoleButton?: PropBool;
  /**
   * show console panel in preview area
   * @default false
   */
  showConsole?: PropBool;
  /**
   * enable close editor file
   * @default false
   */
  closableTabs?: PropBool;
  /**
   * enable wrap content of editor file
   * @default false
   */
  wrapContent?: PropBool;
  /**
   * enable resizable editor width
   * @default true
   */
  resizablePanels?: PropBool;
  /**
   * endable readonly of editor file
   * @default false
   */
  readOnly?: PropBool;
  /**
   * show readonly label in editor file
   * @default true
   */
  showReadOnly?: PropBool;

  // customSetup
  /**
   * Any template will include the needed dependencies,
   * but you can specify any additional dependencies. The key
   * should be the name of the package, while the value is the version,
   * in exactly the same format as it would be inside package.json.
   *
   * Examples:
   * ```js
   * {
   *  "react": "latest",
   *  "@material-ui/core": "4.12.3",
   * }
   * ```
   */
  dependencies?: Record<string, string>;
  /**
   * Sandpack doesn't install devDependencies, because most tools in there
   * were build tools, which is not necessary to properly run a sandbox,
   * but maybe required for running locally or export to CodeSandbox.
   *
   * Examples:
   * ```js
   * {
   *  "@types/react": "latest",
   * }
   * ```
   */
  devDependencies?: Record<string, string>;
  /**
   * The entry file is the starting point of the bundle process.
   *
   * If you change the path of the entry file, make sure you control
   * all the files that go into the bundle process, as prexisting
   * settings in the template might not work anymore.
   */
  entry?: string;
  /**
   * The custom private npm registry setting makes it possible
   * to retrieve npm packages from your own npm registry.
   *
   * Examples:
   * ```js
   * {
   *   enabledScopes: ["@codesandbox"],
   *   registryUrl: "//my-registry.domain.com",
   *   limitToScopes: true, // if false all packages will be fetched from custom registry
   *   registryAuthToken: "SECRET" // optinal value, if public
   * }
   * ```
   */
  npmRegistries?: Array<Omit<NpmRegistry, 'proxyEnabled'>>;

  /** this is a build-in prop */
  codeOptions?: string;
}

const props = withDefaults(
  defineProps<SandboxProp>(),
  {
    template: 'vue3',
    rtl: false,
    autorun: true,
    editorWidthPercentage: 50,
    showNavigator: false,
    showLineNumbers: false,
    showRefreshButton: true,
    showTabs: true,
    showConsoleButton: true,
    showConsole: false,
    closableTabs: false,
    wrapContent: false,
    resizablePanels: true,
    readOnly: false,
    showReadOnly: true,
    dependencies: undefined,
    devDependencies: undefined,
    entry: undefined,
    npmRegistries: undefined,
  },
);

const customSetup = computed(() => {
  const { dependencies, devDependencies, entry, npmRegistries } = props;
  if (dependencies || devDependencies || entry || npmRegistries) {
    return {
      dependencies: dependencies || undefined,
      devDependencies: devDependencies || undefined,
      entry: entry || undefined,
      npmRegistries: npmRegistries || undefined,
    };
  }
  return undefined;
});

const slots = useSlots();
const { isDark } = useData();

const parsedCodeOpts = computed(() => JSON.parse(decodeURIComponent(props.codeOptions as string)));
const files = ref<SandpackFiles>({});

const resolveSandpackFiles = async () => {
  const items = {} as SandpackFiles;
  const content = (slots.default ? slots.default() : []) as VNode[];
  const codeItems = content.filter((v) => v.type === 'div') || [];
  let i = 0;
  if (Array.isArray(codeItems)) {
    for await (const v of codeItems) {
      let code = '';
      let div: HTMLDivElement | null = document.createElement('div');
      const children = (v.children || []) as VNode[];
      const { active, hidden, readOnly, path } = getFileAttributes(parsedCodeOpts.value[i], props.template);
      const filename = path || getDefaultFileName(props.template);
      v.children = children.filter((c) => c.type === 'pre');
      const html = await renderToString(v);
      div.insertAdjacentHTML('beforeend', html);
      code = div.innerText;
      div = null;
      items[filename] = {
        code,
        active,
        hidden,
        readOnly,
      };
      i++;
    }
  }
  files.value = items;
};

watch(() => props?.codeOptions, resolveSandpackFiles);

onBeforeMount(resolveSandpackFiles);
</script>
