# vitepress-plugin-sandpack

![](https://www.js-bridge.com/articles/sandpack.png)

<a href="https://www.npmjs.com/package/sandpack-vue3" target="_blank">Sandpack</a> components that give you the power of editable sandboxes that run in the browser. Powered by Sandpack, the online bundler used by <a href="https://codesandbox.io/" target="_blank">CodeSandbox</a>.

**We can use Sandpack as directive in md file.**

It support: `angular` | `react` | `react-ts` | `vanilla` | `vanilla-ts` | `vue` | `vue3` | `vue3-ts` | `svelte` | `solid` | `test-ts` | [vite-templates](/vite-templates/vite-vue-ts).

## demo

<a href="https://stackblitz.com/edit/vitejs-vite-79ocfq" target="_blank">online demo</a>

## Problem: this package is ESM only

When importing a ESM only package by require, the following error happens.

> Failed to resolve "foo". This package is ESM only but it was tried to load by require.

> "foo" resolved to an ESM file. ESM file cannot be loaded by require.

ESM files cannot be loaded by [require](https://nodejs.org/docs/latest-v18.x/api/esm.html#require:~:text=Using%20require%20to%20load%20an%20ES%20module%20is%20not%20supported%20because%20ES%20modules%20have%20asynchronous%20execution.%20Instead%2C%20use%20import()%20to%20load%20an%20ES%20module%20from%20a%20CommonJS%20module.).

We recommend converting your config to ESM `by either`:

- adding `"type": "module"` to the `nearest package.json`

- or do follow

  *renaming `docs/.vitepress/config.js`/`docs/.vitepress/config.ts` to `docs/.vitepress/config.mjs`/`docs/.vitepress/config.mts`*

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
