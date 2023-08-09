# Install

## install package

```bash
cd vitepress-project-folder

npm i vitepress-plugin-sandpack -D
```

## Problem: this package is ESM only

When importing a ESM only package by require, the following error happens.

> Failed to resolve "foo". This package is ESM only but it was tried to load by require.

> "foo" resolved to an ESM file. ESM file cannot be loaded by require.

ESM files cannot be loaded by [require](https://nodejs.org/docs/latest-v18.x/api/esm.html#require:~:text=Using%20require%20to%20load%20an%20ES%20module%20is%20not%20supported%20because%20ES%20modules%20have%20asynchronous%20execution.%20Instead%2C%20use%20import()%20to%20load%20an%20ES%20module%20from%20a%20CommonJS%20module.).

We recommend converting your config to ESM `by either`:

- adding `"type": "module"` to the `nearest package.json`

- or do follow

  *renaming `docs/.vitepress/config.js`/`docs/.vitepress/config.ts` to `docs/.vitepress/config.mjs`/`docs/.vitepress/config.mts`*


## edit theme config, register global component

`docs/.vitepress/theme/index.ts`

```diff
import DefaultTheme from 'vitepress/theme';
+import { Sandbox } from 'vitepress-plugin-sandpack';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
+    ctx.app.component('Sandbox', Sandbox);
  },
}
```

## edit config

`docs/.vitepress/config.ts`

```js
import { defineConfig } from 'vitepress';
import container from 'markdown-it-container';
import { renderSandbox } from 'vitepress-plugin-sandpack';

// rule of 'html tag name' to 'component name'
// 'sanbox' -> 'Sandbox'
// 'my-sandbox' -> MySandbox
// 'sandbox-react-demo' -> SandboxReactDemo

export default defineConfig({
  // ...

  markdown: {
    config(md) {
      md
        // the second parameter is html tag name
        .use(container, 'sandbox', {
          render (tokens, idx) {
            return renderSandbox(tokens, idx, 'sandbox');
          },
        });
    },
  },

  // ...
})
```

then `npm run docs:dev`

## Usage

[basic usage](./../basic-usage/entry.md)
