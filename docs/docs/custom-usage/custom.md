<script setup>
import deps from '../codes/custom-usage/Deps.ts';
</script>

# Custom usage

> custom dependencies

## Create a custom component, extends from Sandbox.vue

> in `customSetup` prop, we add some dependencies, like `vue3-toastify`

**`MySandbox.vue`**

```vue
<template>
  <Sandbox
    :template="template"
    :light-theme="lightTheme"
    :dark-theme="darkTheme"
    :rtl="rtl"
    :code-options="codeOptions"
    :options="getSandpackOptions(props)"
    :custom-setup="{
      deps: { 'vue3-toastify': 'latest' }
    }"
  >
    <slot />
  </Sandbox>
</template>

<script setup lang="ts">
import {
  Sandbox,
  sandboxProps,
  getSandpackOptions,
} from 'vitepress-plugin-sandpack';

const props = defineProps(sandboxProps);
</script>
```

## edit theme config, register global component

`docs/.vitepress/theme/index.ts`

```diff
import DefaultTheme from 'vitepress/theme';
import Sandbox from 'vitepress-plugin-sandpack';
+import MySandbox from 'you-dir/MySandbox.vue';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component('Sandbox', Sandbox);
+    ctx.app.component('MySandbox', MySandbox);
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
        })
        .use(container, 'my-sandbox', {
          render (tokens, idx) {
            return renderSandbox(tokens, idx, 'my-sandbox');
          },
        });
    },
  },
  // ...
})
```

## Use in markdown

> Go through the above steps, `vue3-toastify` can be found.

::: details code of usage
<CodePanel :value="deps" />
:::

::: my-sandbox {lightTheme=githubLight}
```vue /src/App.vue
<script setup>
// now, vue3-toastify can be found
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const notify = () => {
  toast.success(
    "Success Notification!",
    {
      position: toast.POSITION.BOTTOM_CENTER,
    },
  );
};
</script>

<template>
  <div>
    <button @click="notify">Notify !</button>
  </div>
</template>
```
:::
