![](https://www.js-bridge.com/articles/sandpack.png)

# install

This is plugin for vitepress that give you the power of editable sandboxes that run in the browser.

Language support: `angular` | `react` | `react-ts` | `vanilla` | `vanilla-ts` | `vue` | `vue3` | `vue3-ts` | `svelte` | `solid` | `test-ts`.


- install package

  ```bash
  cd project-folder

  npm i vitepress-plugin-sandpack -D

- edit theme config, register global component

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

- edit config

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

# document

[Full document](https://vitepress-sandbox.js-bridge.com)

[Custom usage](https://vitepress-sandbox.js-bridge.com/custom-usage/custom.html)

## how to use

[online demo](https://stackblitz.com/edit/vitejs-vite-79ocfq)

- code in markdown file

  ![image](https://ik.imagekit.io/jerrywu001/sandbox-code.png)

- preview in browser

  light mode

  ![](https://ik.imagekit.io/jerrywu001/sandbox-demo1.png)

  dark mode
  ![](https://ik.imagekit.io/jerrywu001/sandbox-demo2.png)
