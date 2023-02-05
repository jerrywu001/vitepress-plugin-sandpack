# Install

## install package

```bash
cd vitepress-project-folder

npm i vitepress-plugin-sandpack -D
```

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

## Custom Usage

[custom usage](/custom-usage/custom)