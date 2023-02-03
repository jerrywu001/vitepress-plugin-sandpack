![](https://www.js-bridge.com/articles/sandpack.png)

# install

can only use in vitepress project

- install package

  ```bash
  cd project-folder

  npm i vitepress-plugin-sandpack -D
  ```

- edit config

  ```diff
  import { defineConfig } from 'vitepress';
  +import { useSandBox } from 'vitepress-plugin-sandpack';

  export default defineConfig({
    // ...

  +  markdown: {
  +    config(md) {
  +      useSandBox(md, 'sandbox');
  +    },
  +  },

    // ...
  })
  ```

- edit theme config

  ```diff
  import DefaultTheme from 'vitepress/theme';
  +import { SandBox } from 'vitepress-plugin-sandpack';

  export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
      DefaultTheme.enhanceApp(ctx);
  +    ctx.app.component('SandBox', SandBox);
    },
  }

  ```

# document

[Full document](https://vitepress-sandbox.js-bridge.com)

## how to use

[online demo](https://stackblitz.com/edit/vitejs-vite-79ocfq)

- code in markdown file

  ![image](https://ik.imagekit.io/jerrywu001/sandbox-code.png)

- preview in browser

  light mode

  ![](https://ik.imagekit.io/jerrywu001/sandbox-demo1.png)

  dark mode
  ![](https://ik.imagekit.io/jerrywu001/sandbox-demo2.png)
