<template>
  <div class="d-flex flex-column ga-2">
    <label :for="name">{{ label }}</label>
    <v-text-field
      class="pa-0"
      density="compact"
      variant="outlined"
      :id="name"
      v-model="model"
      :placeholder="placeholder"
      :rules="rules"
      :type="type"
      :hint="hint"
      :counter="counter"
      :hide-details="hideDetails"
    ></v-text-field>
  </div>
</template>
<script setup lang="ts">
const model = defineModel()
defineProps<{
  name: string
  label?: string
  placeholder?: string
  rules?: ((value: string) => boolean | string)[]
  type: 'password' | 'text'
  hint?: string
  counter?: boolean
  hideDetails?: boolean
}>()
</script>
