# vitepress-plugin-sandpack

![](https://www.js-bridge.com/articles/sandpack.png)

<a href="https://www.npmjs.com/package/sandpack-vue3" target="_blank">Sandpack</a> components that give you the power of editable sandboxes that run in the browser. Powered by Sandpack, the online bundler used by <a href="https://codesandbox.io/" target="_blank">CodeSandbox</a>.

**We can use Sandpack as directive in md file.**

It support: `angular` | `react` | `react-ts` | `vanilla` | `vanilla-ts` | `vue` | `vue3` | `vue3-ts` | `svelte` | `solid`.

## demo

<a href="https://stackblitz.com/edit/vitejs-vite-79ocfq" target="_blank">online demo</a>

## Simple usage

<script setup>
import intro from '../codes/Intro.ts';
import introAdvance from '../codes/IntroAdvance.ts';
</script>

::: details code of usage
<CodePanel :value="intro" />
:::

::: sandbox
```vue /src/App.vue
<template>
  <div>{{ hello }}</div>
</template>

<script setup>
import { ref } from 'vue';

const hello = ref('Hello World!');
</script>
```

```js /src/main.js
import App from './App.vue';
import { createApp } from 'vue';

createApp(App).mount('#app');
```
:::

## register dependencies

::: details code of usage
<CodePanel :value="introAdvance" />
:::

::: sandbox {deps="vue3-toastify: latest, animate.css: ~4.1.1"}
```vue /src/App.vue
<script setup>
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

## Usage

[basic usage](./../basic-usage/entry.md)
