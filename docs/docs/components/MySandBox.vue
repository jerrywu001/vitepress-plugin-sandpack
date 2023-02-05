<template>
  <Sandbox
    :rtl="rtl"
    :template="template"
    :light-theme="lightTheme"
    :dark-theme="darkTheme"
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
import { getSandpackOptions, Sandbox, sandboxProps } from '../../../src';
// import { getSandpackOptions, Sandbox, sandboxProps } from '../../../dist/esm';

const props = defineProps(sandboxProps);
</script>
