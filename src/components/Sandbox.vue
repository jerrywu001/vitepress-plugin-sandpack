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
import { computed, nextTick, onBeforeMount, onMounted, ref, useSlots, watch } from 'vue';
import { sandboxProps, type Theme } from './prop';

const props = defineProps(sandboxProps);

const files = ref<SandpackFiles>({});

const editorVisible = computed(() => parsedBoolean(props.hideEditor) ? 'none' : 'flex');

const previewHeight = computed(() => isNaN(Number(props.previewHeight)) ? undefined : Number(props.previewHeight));
const previewHeightStyle =
  computed(() => previewHeight.value ? `${previewHeight.value}px` : 'var(--sp-layout-height)');

const coderHeight = computed(() => isNaN(Number(props.coderHeight)) ? undefined : Number(props.coderHeight));
const coderHeightStyle =
  computed(() => coderHeight.value ? `${coderHeight.value}px` : 'var(--sp-layout-height)');

const slots = useSlots();
// const { isDark } = useData();
const isDark = ref(false);

const docsTheme = computed(
  () => isDark.value
    ? (allThemes[props.darkTheme as Theme] || 'dark')
    : (allThemes[props.lightTheme as Theme] || 'light'),
);

const resolveFiles = async () => {
  files.value = await getSandpackFiles(props, slots);
};

const detectHtmlDarkMode = () => {
  if (typeof document !== 'undefined' && document.documentElement) {
    isDark.value = document.documentElement.classList.contains('dark');
  }
};

watch(props, resolveFiles);

onBeforeMount(resolveFiles);

onMounted(() => {
  nextTick(() => {
    if (typeof document !== 'undefined' && document.documentElement) {
      const mb = new MutationObserver((mutations) => {
        const dom = mutations[0].target as HTMLElement;
        if (dom) detectHtmlDarkMode();
      });

      mb.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      });
    }

    detectHtmlDarkMode();
  });
});
</script>

<style>
.sp-layout > .sp-stack {
  min-width: 100% !important;
}

.sp-layout > .sp-stack.sp-editor {
  height: v-bind(coderHeightStyle);
  display: v-bind(editorVisible);
}

.sp-layout > .sp-stack.sp-preset-column {
  height: v-bind(previewHeightStyle);
}

.sp-resize-handler {
  display: none !important;
}

.sp-rtl-layout {
  flex-flow: wrap-reverse !important;
}

.sp-preview-actions a {
  font-weight: initial !important;
  color: var(--sp-colors-clickable) !important;
}

.sp-console-item code {
  background-color: transparent !important;
}

.sp-preview-actions {
  display: none !important;
}

.sp-preset-column:hover .sp-preview-actions {
  display: flex !important;
}
</style>
