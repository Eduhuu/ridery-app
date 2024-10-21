<template>
  <label for="">Selecciona los campos a filtrar</label>
  <v-divider />
  <div>
    <v-checkbox
      hide-details
      density="compact"
      label="Marca"
      v-model="vehicleStore.filter.brand"
    />
    <v-checkbox
      hide-details
      density="compact"
      label="Modelo"
      v-model="vehicleStore.filter.model"
    />
    <v-checkbox
      hide-details
      density="compact"
      label="Estado"
      v-model="vehicleStore.filter.state"
    />
    <v-checkbox
      hide-details
      density="compact"
      label="Año"
      v-model="vehicleStore.filter.year"
    />
  </div>
  <div v-if="vehicleStore.filter.year">
    <number-field
      dense
      name="yearLessThan"
      label="Año hasta (inclusivo)"
      v-model.number="vehicleStore.filter.yearLessThan"
      placeholder="Ingrese un año"
      hideDetails
    />
    <number-field
      dense
      name="yearGreaterThan"
      label="Año desde"
      v-model.number="vehicleStore.filter.yearGreaterThan"
      placeholder="Ingrese un año"
      hideDetails
    />
  </div>

  <v-divider></v-divider>
  <div>
    <label for="pageSize">Cantidad de elementos por página</label>
    <v-select
      id="pageSize"
      density="compact"
      variant="outlined"
      v-model="pageSize"
      :items="[1, 5, 10, 25, 50]"
    ></v-select>
  </div>
</template>
<script setup lang="ts">
import { useVehicleStore } from '@/stores/vehicle'
import NumberField from '../fields/NumberField.vue'
import { ref, watch } from 'vue'
const vehicleStore = useVehicleStore()
const pageSize = ref(vehicleStore.filter.pageSize)

watch(pageSize, prevPageSize => {
  vehicleStore.updatePageSize(prevPageSize)
})
</script>
