<template>
  <label :for="name">{{ label }}</label>
  <v-number-input
    :density="dense ? 'compact' : 'default'"
    v-model.number="model"
    :id="name"
    :placeholder="placeholder"
    controlVariant="split"
    :inset="false"
    :rules="rules"
    variant="outlined"
    :hide-details="hideDetails"
  ></v-number-input>
</template>
<script setup lang="ts">
import { VNumberInput } from 'vuetify/labs/VNumberInput'
const model = defineModel({ default: 0 })
defineProps<{
  dense?: boolean
  name: string
  label?: string
  placeholder?: string
  rules?: ((value: string) => boolean | string)[]
  hideDetails?: boolean
}>()
</script>
