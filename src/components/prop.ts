import * as allThemes from '@codesandbox/sandpack-themes';
import { SandpackPredefinedTemplate } from 'sandpack-vue3';
import { NpmRegistry } from '@codesandbox/sandpack-client';
import type { PropType } from 'vue';

// node_modules/@codesandbox/sandpack-themes/dist/esm/index.d.ts
export type Theme = keyof typeof allThemes;
export type PropBool = boolean | 'true' | 'false' | '0' | '1';

export interface SandpackOptions {
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
}

export interface SandpackCustomSetup {
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
   *
   * // or
   *
   * '@material-ui/core: ^4.12.3, react: latest'
   * ```
   */
  deps?: Record<string, string> | string;
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
   *
   * // or
   *
   * '@types/react: latest'
   * ```
   */
  devDeps?: Record<string, string> | string;
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
}

export interface SandpackProp extends SandpackOptions, SandpackCustomSetup {
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

  /**
   * right to left layout
   * @default undefined
   */
  options?: SandpackOptions;

  /**
   * sandbox custom setup, like `dependencies` or `devDependencies`...
   * @default undefined
   */
  customSetup?: SandpackCustomSetup;

  /** this is a build-in prop */
  codeOptions?: string;
}

const sandboxProps = {
  /**
   * light theme name
   * @default 'light'
  */
  lightTheme: {
    type: String as PropType<Theme>,
    required: false,
    default: 'light',
  },
  /**
   * dark theme name
   * @default 'dark'
  */
  darkTheme: {
    type: String as PropType<Theme>,
    required: false,
    default: 'dark',
  },
  /**
   * sandbox language
   * @default 'vue3'
  */
  template: {
    type: String as PropType<SandpackPredefinedTemplate>,
    required: false,
    default: 'vue3',
  },
  /**
   * right to left layout
   * @default false
   */
  rtl: {
    type: [Boolean, String] as PropType<PropBool>,
    required: false,
    default: false,
  },
  // options
  /**
   * sandbox options
   * @default undefined
   */
  options: {
    type: Object as PropType<SandpackOptions>,
    required: false,
    default: undefined,
  },
  /**
   * auto run code
   * @default true
   */
  autorun: {
    type: [String, Boolean] as PropType<PropBool>,
    required: false,
    default: true,
  },
  /**
   * editor div width, default 50 -> 50%
   * @default 50
   */
  editorWidthPercentage: {
    type: [String, Number],
    required: false,
    default: 50,
  },
  /**
   * show route navigator in preview area
   * @default false
   */
  showNavigator: {
    type: [String, Boolean] as PropType<PropBool>,
    required: false,
    default: false,
  },
  /**
   * show line numbers in editor file
   * @default false
   */
  showLineNumbers: {
    type: [String, Boolean] as PropType<PropBool>,
    required: false,
    default: false,
  },
  /**
   * show refresh button in preview area
   * @default true
   */
  showRefreshButton: {
    type: [String, Boolean] as PropType<PropBool>,
    required: false,
    default: true,
  },
  /**
   * show tabs in editor area
   * @default true
   */
  showTabs: {
    type: [String, Boolean] as PropType<PropBool>,
    required: false,
    default: true,
  },
  /**
   * show console button in preview area
   * @default true
   */
  showConsoleButton: {
    type: [String, Boolean] as PropType<PropBool>,
    required: false,
    default: true,
  },
  /**
   * show console panel in preview area
   * @default false
   */
  showConsole: {
    type: [String, Boolean] as PropType<PropBool>,
    required: false,
    default: false,
  },
  /**
   * enable close editor file
   * @default false
   */
  closableTabs: {
    type: [String, Boolean] as PropType<PropBool>,
    required: false,
    default: false,
  },
  /**
   * enable wrap content of editor file
   * @default false
   */
  wrapContent: {
    type: [String, Boolean] as PropType<PropBool>,
    required: false,
    default: false,
  },
  /**
   * enable resizable editor width
   * @default true
   */
  resizablePanels: {
    type: [String, Boolean] as PropType<PropBool>,
    required: false,
    default: true,
  },
  /**
   * endable readonly of editor file
   * @default false
   */
  readOnly: {
    type: [String, Boolean] as PropType<PropBool>,
    required: false,
    default: false,
  },
  /**
   * show readonly label in editor file
   * @default true
   */
  showReadOnly: {
    type: [String, Boolean] as PropType<PropBool>,
    required: false,
    default: true,
  },
  // customSetup
  /**
   * sandbox custom setup, like `dependencies` or `devDependencies`...
   * @default undefined
   */
  customSetup: {
    type: Object as PropType<SandpackCustomSetup>,
    required: false,
    default: undefined,
  },
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
   *
   * // or
   *
   * '@material-ui/core: ^4.12.3, react: latest'
   * ```
   */
  deps: {
    type: [String, Object] as PropType<Record<string, string> | string>,
    required: false,
    default: undefined,
  },
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
   *
   * // or
   *
   * '@types/react: latest'
   * ```
   */
  devDeps: {
    type: [String, Object] as PropType<Record<string, string> | string>,
    required: false,
    default: undefined,
  },
  /**
   * The entry file is the starting point of the bundle process.
   *
   * If you change the path of the entry file, make sure you control
   * all the files that go into the bundle process, as prexisting
   * settings in the template might not work anymore.
   */
  entry: {
    type: String,
    required: false,
    default: undefined,
  },
  /** this is a build-in prop */
  codeOptions: {
    type: String,
    required: false,
    default: undefined,
  },
};

export type SandboxProp = typeof sandboxProps;

export { sandboxProps };
