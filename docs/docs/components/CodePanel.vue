<template>
  <div class="language-js">
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
