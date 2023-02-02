import * as allThemes from '@codesandbox/sandpack-themes';
import { SandpackPredefinedTemplate } from 'sandpack-vue3';

// node_modules/@codesandbox/sandpack-themes/dist/esm/index.d.ts
export type Theme = keyof typeof allThemes;

export interface SandboxProp {
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
}
