const code = `::: sandbox {template=vue3-ts}
\`\`\`js /src/person.ts
const name = 'Tom';
export { name };
\`\`\`

\`\`\`vue /src/App.vue
<script setup lang="ts">
import { ref } from 'vue';
import { name } from './person.ts';

const person = ref<string>(name);
</script>

<template>
  <h1>Hi, I am {{ person }}</h1>
</template>
\`\`\`
:::`;

export default code;
