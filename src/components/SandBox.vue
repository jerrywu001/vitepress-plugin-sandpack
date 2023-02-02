<script setup lang="ts">
import {
  Sandpack,
  type SandpackFiles,
  type SandpackPredefinedTemplate,
} from 'sandpack-vue3';
import { useData } from 'vitepress';
import { computed, onMounted, ref } from 'vue';
import * as allThemes from '@codesandbox/sandpack-themes';
import type { Theme } from '../types';

const props = withDefaults(
  defineProps<{
    attrs?: string;
    /**
   * light theme name
   * @default 'light'
  */
    lightTheme: Theme;
    /**
   * dark theme name
   * @default 'dark'
  */
    darkTheme: Theme;
    /**
   * sandbox language
   * @default 'vue3'
  */
    template?: SandpackPredefinedTemplate;
    /**
   * right to left layout
   * @default false
   */
    rtl?: boolean;
    // options
    /**
   * editor div width, default 50 -> 50%
   * @default 50
   */
    editorWidthPercentage: number;
    /**
   * show route navigator in preview area
   * @default false
   */
    showNavigator?: boolean;
    /**
   * show line numbers in editor file
   * @default false
   */
    showLineNumbers?: boolean;
    /**
   * show refresh button in preview area
   * @default true
   */
    showRefreshButton?: boolean;
    /**
   * show tabs in editor area
   * @default true
   */
    showTabs?: boolean;
    /**
   * show console button in preview area
   * @default true
   */
    showConsoleButton?: boolean;
    /**
   * show console panel in preview area
   * @default false
   */
    showConsole?: boolean;
    /**
   * enable close editor file
   * @default false
   */
    closableTabs?: boolean;
    /**
   * enable wrap content of editor file
   * @default false
   */
    wrapContent?: boolean;
    /**
   * enable resizable editor width
   * @default true
   */
    resizablePanels?: boolean;
    /**
   * endable readonly of editor file
   * @default false
   */
    readOnly?: boolean;
    /**
   * show readonly label in editor file
   * @default true
   */
    showReadOnly?: boolean;
  }>(),
  {
    template: 'vue3',
    rtl: false,
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
  },
);

const parsedProp = (prop: boolean | string) => ['false', '0'].includes(String(prop).trim()) ? false : Boolean(prop);
const parsedAttrs = computed(() => JSON.parse(decodeURIComponent(props.attrs as string)));
const el = ref<HTMLElement | null>(null);
const files = ref<SandpackFiles | null>(null);
const { isDark } = useData();

const getDefaultFileName = () => {
  let defaultFilePath = '/src/index.js';
  switch (props.template) {
    case 'vanilla-ts':
      defaultFilePath = '/src/index.ts';
      break;
    case 'angular':
      defaultFilePath = '/src/app/app.component.ts';
      break;
    case 'react':
      defaultFilePath = '/App.js';
      break;
    case 'react-ts':
      defaultFilePath = '/App.tsx';
      break;
    case 'vue':
      defaultFilePath = '/src/App.vue';
      break;
    case 'vue3':
      defaultFilePath = '/src/App.vue';
      break;
    case 'svelte':
      defaultFilePath = '/index.js';
      break;
    case 'solid':
      defaultFilePath = '/App.tsx';
      break;
    default:
      break;
  }
  return defaultFilePath;
};

const getFileAttributes = (className = '') => {
  let path: string | undefined;
  const attrs = className.split(' ');
  const hidden = attrs.includes('[hidden]');
  const readOnly = attrs.includes('[readonly]') || attrs.includes('[readOnly]');
  const active = attrs.includes('[active]');
  const filename = attrs.find((v) => v.includes('.'));
  if (filename) {
    path = filename;
    path = path === 'App.vue' ? getDefaultFileName() : path;
    path = path.startsWith('/') ? path : `/${path}`;
  }
  return { hidden, active, readOnly, path };
};

onMounted(() => {
  const items = {};

  el.value?.querySelectorAll('pre').forEach((e, key) => {
    const { active, hidden, readOnly, path } = getFileAttributes(
      parsedAttrs.value[key],
    );

    const filename = path || getDefaultFileName();
    items[filename] = { code: e.innerText, active, hidden, readOnly };
  });

  files.value = items;
});
</script>

<template>
  <div ref="el" style="display: none">
    <slot />
  </div>

  <Sandpack
    v-if="files"
    :theme="isDark ? (allThemes[darkTheme] || 'dark') : (allThemes[lightTheme] || 'light')"
    :template="template"
    :files="files"
    :rtl="parsedProp(rtl)"
    :options="{
      editorWidthPercentage,
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
    :custom-setup="{
      dependencies: {
        'animate.css': '~4.1.1',
        'vue3-toastify': 'latest',
        pinia: '^2.0.22'
      }
    }"
  />
</template>
