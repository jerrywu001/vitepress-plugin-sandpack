<template>
  <!-- 'code-options' is a build-in prop, do not edit it -->
  <Sandbox
    :rtl="rtl"
    :template="template"
    :light-theme="lightTheme"
    :dark-theme="darkTheme"
    :options="{
      ...props, // do not forget it
      showLineNumbers: true,
      resizablePanels: false,
      closableTabs: true,
    }"
    :custom-setup="{
      ...props, // do not forget it
    }"
    :code-options="codeOptions"
  >
    <slot />
  </Sandbox>
</template>

<script setup lang="ts">
import { Sandbox, sandboxProps } from '../../../src';
// import { Sandbox, sandboxProps } from '../../../dist/esm';

const props = defineProps(sandboxProps);
</script>
