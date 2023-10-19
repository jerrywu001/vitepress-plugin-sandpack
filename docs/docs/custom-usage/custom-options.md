<script setup>
import opts from '../codes/custom-usage/options.ts';
</script>

# Custom Options

## Create a custom component, extends from Sandbox.vue

> we change the `showLineNumbers resizablePanels closableTabs`.
>
> `Tsx` is highly recommended. Compared to `vue single file`, it is simple and straightforward.

::: code-group
```tsx [write with .tsx]
// OptsSandbox.tsx
import { defineComponent } from 'vue';
import { Sandbox, sandboxProps } from 'vitepress-plugin-sandpack';

/**
 * extends from Sandbox.
 * Compared to VUE single file, it is simple and straightforward.
 */
export const OptsSandbox = defineComponent({
  name: 'OptsSandbox',
  props: sandboxProps,
  setup(props, { slots }) {
    return () => (
      <Sandbox
        {...props}
        options={{
          showLineNumbers: true,
          resizablePanels: false,
          closableTabs: true,
        }}
      >
        { slots?.default ? slots.default() : null }
      </Sandbox>
    );
  },
});
```

```vue [write with .vue]
<!-- OptsSandbox.vue -->
<template>
  <!-- 'code-options' is a build-in prop, do not edit it -->
  <Sandbox
    :rtl="rtl"
    :template="template"
    :light-theme="lightTheme"
    :dark-theme="darkTheme"
    :options="{
      ...props, // do not forget it
      showLineNumbers: true,
      resizablePanels: false,
      closableTabs: true,
    }"
    :custom-setup="{
      ...props, // do not forget it
    }"
    :code-options="codeOptions"
  >
    <slot />
  </Sandbox>
</template>

<script setup lang="ts">
import { Sandbox, sandboxProps } from 'vitepress-plugin-sandpack';

const props = defineProps(sandboxProps);
</script>
```
:::

## edit theme config, register global component

`docs/.vitepress/theme/index.ts`

```diff
import DefaultTheme from 'vitepress/theme';
import Sandbox from 'vitepress-plugin-sandpack';
+import OptsSandbox from 'you-dir/OptsSandbox.vue';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component('Sandbox', Sandbox);
+    ctx.app.component('OptsSandbox', OptsSandbox);
  },
}
```

## edit config

`docs/.vitepress/config.ts`

```js
import { defineConfig } from 'vitepress';
import container from 'markdown-it-container';
import { renderSandbox } from 'vitepress-plugin-sandpack';
import 'vitepress-plugin-sandpack/dist/style.css';

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
        .use(container, 'opts-sandbox', {
          render (tokens, idx) {
            return renderSandbox(tokens, idx, 'opts-sandbox');
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
<CodePanel :value="opts" />
:::

::: opts-sandbox {template=vue3-ts}
```js /src/person.ts
const name = 'Tom';
export { name };
```

```vue /src/App.vue
<script setup lang="ts">
import { ref } from 'vue';
import { name } from './person.ts';

const person = ref<string>(name);
</script>

<template>
  <h1>Hi, I am {{ person }}</h1>
</template>
```
:::
