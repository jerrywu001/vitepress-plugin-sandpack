import { type SandpackPredefinedTemplate } from 'sandpack-vue3';
import type { PropBool } from '../types';

const getDefaultFileName = (template: SandpackPredefinedTemplate) => {
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

const getFileAttributes = (info: string, template: SandpackPredefinedTemplate) => {
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

const parsedProp = (prop: PropBool) => String(prop).trim() === ''
  ? true
  : ['false', '0'].includes(String(prop).trim()) ? false : Boolean(prop);

export {
  getDefaultFileName,
  getFileAttributes,
  parsedProp,
};
