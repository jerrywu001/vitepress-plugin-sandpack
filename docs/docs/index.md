---
layout: home

title: vitepress-plugin-sandpack
titleTemplate: description for vitepress-plugin-sandpack

hero:
  name: vitepress sandbox
  tagline: use sandpack-vue3 as directive in vitepress doc
  actions:
    - theme: brand
      text: Get Started
      link: /get-started/introduction
    - theme: alt
      text: View on GitHub
      link: https://github.com/codes-templates/npm-vue3
---

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
