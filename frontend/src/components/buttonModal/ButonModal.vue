<template>
  <!-- <div class="pa-4 text-center"> -->
  <v-dialog v-model="dialog" max-width="600">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn-group variant="tonal" density="comfortable">
        <v-btn :icon="appendicon" v-bind="activatorProps"> </v-btn>
      </v-btn-group>
    </template>

    <v-card :title="dialogTitle">
      <v-card-text>
        <slot></slot>
      </v-card-text>

      <v-divider></v-divider>
    </v-card>
  </v-dialog>
  <!-- </div> -->
</template>
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  dialogTitle: string
  appendicon: string
}>()

const dialog = ref(false)
</script>
