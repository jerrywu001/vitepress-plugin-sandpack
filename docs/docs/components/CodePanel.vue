<template>
  <div class="language-md">
    <button title="Copy Code" class="copy" @click="($event) => doCopy($event)" />
    <span class="lang">md</span>
    <pre class="shiki material-theme-palenight" style="padding: 0;">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <code class="language-md hljs language-markdown" v-html="code" />
    </pre>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import hljs from 'highlight.js';

const props = defineProps({
  value: String,
});

const code = ref<string | null>(null);

function resolveCodeHtml() {
  // https://highlightjs.org/static/demo/
  code.value = hljs.highlight((props.value as string).trim(), { language: 'c++' }).value.trim();
}

function doCopy(event: MouseEvent) {
  event.preventDefault();
  event.stopPropagation();
  const btnDom = event.currentTarget as HTMLDivElement;
  if (btnDom) {
    const pre = btnDom.parentNode?.querySelector('code');
    if (pre) {
      const content = btnDom.parentNode?.querySelector('code')?.innerText;
      const copyarea = document.createElement('textarea');
      copyarea.setAttribute('readonly', 'readonly');
      // @ts-ignore
      copyarea.value = content;
      document.body.appendChild(copyarea);
      copyarea.select();
      document.execCommand('copy');
      document.body.removeChild(copyarea);
      btnDom.classList.add('copied');
      setTimeout(() => {
        btnDom.classList.remove('copied');
      }, 1600);
    }
  }
}

onMounted(() => {
  resolveCodeHtml();
});

</script>
