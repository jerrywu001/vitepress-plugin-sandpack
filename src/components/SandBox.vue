<template>
  <Sandpack
    :theme="docsTheme"
    :template="template"
    :rtl="parsedBoolean(rtl)"
    :files="files"
    :options="(getSandpackOptions(props) as any)"
    :custom-setup="getCustomSetupFromProps(props)"
  />
</template>

<script setup lang="ts">
import * as allThemes from '@codesandbox/sandpack-themes';
import { getSandpackFiles, getCustomSetupFromProps, parsedBoolean, getSandpackOptions } from './SandpackUtil';
import { Sandpack, type SandpackFiles } from 'sandpack-vue3';
import { computed, onBeforeMount, ref, useSlots, watch } from 'vue';
import { sandboxProps, type Theme } from './prop';
import { useData } from 'vitepress';

const props = defineProps(sandboxProps);

const files = ref<SandpackFiles>({});

const slots = useSlots();
const { isDark } = useData();

const docsTheme = computed(
  () => isDark.value
    ? (allThemes[props.darkTheme as Theme] || 'dark')
    : (allThemes[props.lightTheme as Theme] || 'light'),
);

const resolveFiles = async () => {
  files.value = await getSandpackFiles(props, slots);
};

watch(props, resolveFiles);

onBeforeMount(resolveFiles);
</script>
