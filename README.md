# install

> only use in vitepress project

- install package

```bash
cd project-folder

npm i vitepress-plugin-sandpack
```

- edit config

```diff
import { defineConfig } from 'vitepress';
import { useSandBox } from '../../../src/plugin';

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

[Full document](https://vitepress-sandbox.netlify.app)

## how to use

[online demo](https://stackblitz.com/edit/vitejs-vite-79ocfq)

- code in markdown file

![image](https://ik.imagekit.io/jerrywu001/sandbox-code_9ga23pVJA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675322691473)

- preview in browser

![](https://ik.imagekit.io/jerrywu001/sandbox-demo1_PsFSfd_X_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675322867870)

![](https://ik.imagekit.io/jerrywu001/sandbox-demo2_rlVXV97ZJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675322867747)
