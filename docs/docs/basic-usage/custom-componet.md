```vue
<template>
  <Sandbox
    :template="template"
    :light-theme="lightTheme"
    :dark-theme="darkTheme"
    :rtl="rtl"
    :code-options="codeOptions"
    :options="getSandpackOptions(props)"
    :custom-setup="{
      deps: { 'vue3-toastify': 'latest' }
    }"
  >
    <slot />
  </Sandbox>
</template>

<script setup lang="ts">
import {
  Sandbox,
  sandboxProps,
  getSandpackOptions,
} from 'vitepress-plugin-sandpack';

const props = defineProps(sandboxProps);
</script>
```
