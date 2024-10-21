<template>
  <main>
    <RouterView />
  </main>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<style scoped>
main {
  min-height: 100%;
}
</style>
