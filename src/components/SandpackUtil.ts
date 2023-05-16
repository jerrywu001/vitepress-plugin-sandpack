/* eslint-disable arrow-body-style */
import { type SandpackFiles, type SandpackPredefinedTemplate } from 'sandpack-vue3';
import type { Slots, VNode } from 'vue';
import { renderToString } from 'vue/server-renderer';
import type { PropBool, SandpackProp } from './prop';

const safeKey = (str: string) => str.trim().replace(/'/g, '').replace(/"/g, '');

const getDepsMap = (depsStr: string) => {
  const deps = {} as Record<string, string>;
  const items = depsStr.split(',');
  items.forEach((v) => {
    let [key, value] = v.split(':');
    key = safeKey(key);
    value = safeKey(value);
    deps[key] = value;
  });
  return deps;
};

const getDefaultFileName = (template: SandpackPredefinedTemplate | undefined) => {
  let defaultFilePath = '/src/index.js';
  switch (template) {
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

const getFileAttributes = (info: string, template?: SandpackPredefinedTemplate) => {
  let path: string | undefined;
  const opts = (info || '').split(' ');
  const hidden = opts.includes('[hidden]');
  const readOnly = opts.includes('[readonly]') || opts.includes('[readOnly]');
  const active = opts.includes('[active]');
  const filename = opts.find((v) => v.includes('.'));
  if (filename) {
    path = filename;
    path = path === 'App.vue' ? getDefaultFileName(template) : path;
    path = path.startsWith('/') ? path : `/${path}`;
  }
  return { hidden, active, readOnly, path };
};

const parsedBoolean = (prop?: PropBool) => (typeof prop === 'undefined' || String(prop).trim() === '')
  ? true
  : ['false', '0'].includes(String(prop).trim()) ? false : Boolean(prop);

const parsedDeps = (deps: string | Record<string, string> | undefined) => {
  return (
    deps
      ? typeof deps === 'string' ? getDepsMap(deps) : deps
      : undefined
  ) as Record<string, string> | undefined;
};

const getSandpackFiles = async (props: SandpackProp, slot: Slots) => {
  const items = {} as SandpackFiles;
  const content = (slot.default ? slot.default() : []) as VNode[];
  let codeItems = content.filter((v) => v.type === 'div') || [];
  let i = 0;
  if (Array.isArray(codeItems)) {
    if (!codeItems.length) {
      // @ts-ignore
      const ctx = content ? content[0]?.ctx : {};
      if (ctx && ctx?.slots) {
        codeItems = ctx.slots?.default ? ctx.slots.default() : [];
      }
    }
    for await (const v of codeItems) {
      let code = '';
      let div: HTMLDivElement | null = document.createElement('div');
      const children = (v.children || []) as VNode[];
      const { active, hidden, readOnly, path } =
        getFileAttributes(JSON.parse(decodeURIComponent(props.codeOptions as string))[i], props.template);
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
  return items;
};

const getSandpackOptions = (props = {} as SandpackProp) => {
  const { options: opts } = props;
  const options = opts && typeof opts === 'object' ? { ...opts } : {};
  const result = {
    autorun: parsedBoolean(props.autorun),
    editorWidthPercentage: isNaN(Number(props.editorWidthPercentage)) ? 50 : Number(props.editorWidthPercentage),
    showNavigator: parsedBoolean(props.showNavigator),
    showLineNumbers: parsedBoolean(props.showLineNumbers),
    showRefreshButton: parsedBoolean(props.showRefreshButton),
    showTabs: parsedBoolean(props.showTabs),
    showConsoleButton: parsedBoolean(props.showConsoleButton),
    showConsole: parsedBoolean(props.showConsole),
    closableTabs: parsedBoolean(props.closableTabs),
    wrapContent: parsedBoolean(props.wrapContent),
    resizablePanels: parsedBoolean(props.resizablePanels),
    readOnly: parsedBoolean(props.readOnly),
    showReadOnly: parsedBoolean(props.showReadOnly),
  };
  for (const key in options) {
    if (key in result) {
      if (['editorWidthPercentage'].includes(key)) {
        result.editorWidthPercentage = isNaN(Number(options[key])) ? 50 : Number(options[key]);
      } else {
        result[key] = parsedBoolean(options[key]);
      }
    }
  }
  return result;
};

const getCustomSetupFromProps = (props: SandpackProp) => {
  const { deps, devDeps, entry, customSetup } = props;
  const setup = customSetup && typeof customSetup === 'object' ? customSetup : undefined;
  const result = {
    dependencies: undefined,
    devDependencies: undefined,
    entry: undefined,
    npmRegistries: undefined,
  } as any;

  if (deps || devDeps || entry) {
    result.dependencies = parsedDeps(deps);
    result.devDependencies = parsedDeps(devDeps);
    result.entry = entry || undefined;
  }
  if (setup) {
    result.dependencies = parsedDeps(setup.deps);
    result.devDependencies = parsedDeps(setup.devDeps);
    result.entry = setup.entry;
    result.npmRegistries = setup.npmRegistries;
  }

  return result;
};

export {
  getCustomSetupFromProps,
  getSandpackOptions,
  getSandpackFiles,
  getDefaultFileName,
  getFileAttributes,
  parsedBoolean,
  parsedDeps,
};
