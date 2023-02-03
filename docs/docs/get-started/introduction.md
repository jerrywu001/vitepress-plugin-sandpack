# vitepress-plugin-sandpack

![](https://www.js-bridge.com/articles/sandpack.png)

<a href="https://www.npmjs.com/package/sandpack-vue3" target="_blank">Sandpack</a> components that give you the power of editable sandboxes that run in the browser. Powered by Sandpack, the online bundler used by <a href="https://codesandbox.io/" target="_blank">CodeSandbox</a>.

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
