# vitepress-plugin-sandpack

![](https://sandpack.codesandbox.io/docs/assets/images/opening-2e8585410990e9207819b91c4e9451b8.jpg)

<a href="https://www.npmjs.com/package/sandpack-vue3" target="_blank">Sandpack</a> components that give you the power of editable sandboxes that run in the browser. Powered by Sandpack, the online bundler used by <a href="https://codesandbox.io/" target="_blank">CodeSandbox</a>.

Sandpack is an open ecosystem of components and utilities that allow you to compile and run modern frameworks in the browser. You can either use one of our predefined components for embedding the CodeSandbox experience into your projects, or you can build your own version of sandpack, on top of our standard components and utilities. As you walk through this guide, you will get deeper into our ecosystem.

## demo

<a href="https://stackblitz.com/edit/vitejs-vite-79ocfq" target="_blank">online demo</a>

## Simple usage

- code

<script setup>
import SourceCode from '../codes/Intro.vue'
</script>

<SourceCode />

- result

::: sandbox
```vue /src/App.vue [active]
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
