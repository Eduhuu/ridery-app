<template>
  <MainHeader />
  <main class="flex-grow-1">
    <RouterView />
  </main>
  <MainFooter />
</template>
<script setup lang="ts">
import MainHeader from '../header/MainHeader.vue'
import MainFooter from '../footer/MainFooter.vue'
import { RouterView } from 'vue-router'
</script>
<style scoped>
#id {
  display: flex;
  flex-direction: column;
}

main {
  border-radius: 5px;
  padding: 0.5em 1em;
  background-color: white;
}
</style>
