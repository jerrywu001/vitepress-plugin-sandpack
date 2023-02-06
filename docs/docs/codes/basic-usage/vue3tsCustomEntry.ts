const code = `::: sandbox {entry=/myEntry.js}
\`\`\`js /myEntry.js [active]
import { createApp } from 'vue'
import App from './MyApp.vue'

console.log('test entry')
createApp(App).mount('#app')
\`\`\`

\`\`\`vue /MyApp.vue
<script setup>
import { ref } from 'vue';

const msg = ref('MyApp');
</script>

<template>
  <div>{{ msg }}</div>
</template>
\`\`\`
:::`;

export default code;
