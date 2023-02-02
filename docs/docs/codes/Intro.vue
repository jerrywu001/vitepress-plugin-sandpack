<template>
  <code-panel :value="code" />
</template>

<script setup>
import CodePanel from '../components/CodePanel.vue';

const code = `::: sandbox
\`\`\`vue /src/App.vue [active]
<template>
  <div>{{ hello }}</div>
<\/template>

<script setup>
import { ref } from 'vue';

const hello = ref('Hello World!');
<\/script>
\`\`\`

\`\`\`js /src/main.js
import App from './App.vue';
import { createApp } from 'vue';

createApp(App).mount('#app');
\`\`\`
:::`
</script>
