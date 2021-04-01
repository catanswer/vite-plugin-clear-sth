<template>
  <div>{{ txt }}</div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  
  const txt = ref<string>('我是一段测试的小代码！')
  console.log('Test Word')

</script>
