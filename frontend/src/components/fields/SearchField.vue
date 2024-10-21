<template>
  <v-form @submit.prevent="onEnter">
    <v-text-field
      class="border-secondary"
      prepend-inner-icon="mdi-magnify"
      v-model="model"
      placeholder="Buscar"
      hide-details
      variant="outlined"
      density="compact"
    />
  </v-form>
</template>
<script setup lang="ts">
const model = defineModel()
defineProps<{
  onEnter: () => Promise<void> | void
}>()
</script>
