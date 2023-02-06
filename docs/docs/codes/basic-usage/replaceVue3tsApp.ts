const code = `::: sandbox {template=vue3-ts}
\`\`\`vue /src/App.vue
<script setup lang="ts">
import { ref } from 'vue';

const person = ref<string>('Lily');
</script>

<template>
  <h1>Hi, I am {{ person }}</h1>
</template>
\`\`\`
:::`;

export default code;
