/// <reference types="vite/client" />

import dts from 'vite-plugin-dts';
import path from 'path';
import Vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      'vitepress-plugin-sandpack': path.resolve(__dirname, './src/index.ts'),
    },
  },
  build: {
    minify: false,
    lib: {
      fileName: (type) => {
        if (type === 'es') return 'esm/index.js';
        if (type === 'cjs') return 'index.js';
        return 'index.js';
      },
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
    },
    // sourcemap: true,
    rollupOptions: {
      external: [
        'vue',
        'vite',
        'vitepress',
        'sandpack-vue3',
        '@codesandbox/sandpack-themes',
        'markdown-it-container'
      ],
    },
  },
  plugins: [
    Vue({
      // reactivityTransform: true,
    }),
    // https://www.npmjs.com/package/vite-plugin-dts
    dts({
      include: 'src',
      rollupTypes: true,
      afterBuild: () => {
        // do something else
      },
    }),
  ],
});
