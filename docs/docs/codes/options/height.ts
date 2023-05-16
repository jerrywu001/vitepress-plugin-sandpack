const code = `::: sandbox {previewHeight=512}
\`\`\`vue /src/App.vue
<template>
  <h3>Preview Height: {{ msg }}</h3>
</template>

<script setup>
import { ref } from 'vue';
const msg = ref('512px');
</script>
\`\`\`
:::`;

export default code;
