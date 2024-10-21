<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const useStore = useUserStore()
</script>
<template>
  <header class="d-flex ga-2 justify-end">
    <v-btn
      prepend-icon="mdi-account-off-outline "
      variant="tonal"
      @click="useStore.logout"
      >Cerrar sesión</v-btn
    >
  </header>
</template>
<style scoped>
header {
  border-radius: 5px;
  padding: 0.5em 1em;
  background-color: white;
}
</style>
