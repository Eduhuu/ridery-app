<template>
  <v-menu v-model="menu" :close-on-content-click="false" location="end">
    <template v-slot:activator="{ props }">
      <v-btn-group variant="tonal" density="comfortable">
        <v-btn :icon="icon" v-bind="props" />
      </v-btn-group>
    </template>
    <v-card :class="classConteiner" :min-width="maxWidth">
      <slot></slot>
    </v-card>
  </v-menu>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
defineProps<{
  icon: string
  maxWidth: string
  classConteiner?: string
}>()
const menu = ref(false)
</script>
