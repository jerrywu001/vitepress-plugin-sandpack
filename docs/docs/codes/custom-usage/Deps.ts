const code = `::: my-sandbox {lightTheme=githubLight}
\`\`\`vue /src/App.vue
<script setup>
// now, vue3-toastify can be found
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
<\/script>

<template>
  <div>
    <button @click="notify">Notify !</button>
  </div>
<\/template>
\`\`\`
:::`;

export default code;
