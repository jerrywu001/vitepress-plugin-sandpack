<template>
  <div class="language-js">
    <button title="Copy Code" class="copy"></button>
    <span class="lang">js</span>
    <pre class="shiki material-theme-palenight">
      <code>{{ value }}</code>
    </pre>
  </div>
</template>

<script setup>
defineProps({
  value: String
})
</script>
