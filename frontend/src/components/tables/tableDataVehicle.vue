<template>
  <v-data-table
    :headers="tableHeaders"
    :items="vehicleStore.vehicles.docs"
    :items-per-page="vehicleStore.filter.pageSize"
    class="border rounded"
  >
    <template v-slot:[`item.state`]="{ item, index }">
      <div class="d-flex align-center">
        <v-select
          class="w-auto"
          flat
          hide-details
          variant="solo"
          density="compact"
          :items="['disponible', 'mantenimiento']"
          v-model="item.state"
          @update:model-value="
            vehicleStore.patchVehicle(
              vehicleStore.vehicles.docs[index]._id,
              item,
            )
          "
        />
      </div>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <div class="d-flex justify-end">
        <v-btn-group variant="tonal" density="comfortable">
          <v-btn
            @click="vehicleStore.deleteVehicle(item._id)"
            color="error"
            variant="tonal"
            density="default"
            icon="mdi-delete"
          ></v-btn>
        </v-btn-group>
      </div>
    </template>
    <template v-slot:bottom>
      <v-pagination
        :length="vehicleStore.vehicles.totalPages"
        v-model="page"
      ></v-pagination>
    </template>
    <template v-slot:no-data>
      <p>No posee contenido, porfavor cree un vehículo.</p>
    </template>
  </v-data-table>
</template>
<script setup lang="ts">
import { useVehicleStore } from '@/stores/vehicle'
import { onMounted, ref, watch } from 'vue'

const vehicleStore = useVehicleStore()
const tableHeaders = ref([
  { title: 'Marca', key: 'brand', width: '20%' },
  { title: 'Modelo', key: 'model', width: '20%' },
  { title: 'Año', key: 'year', width: '20%' },
  { title: 'Estado del vehículo', key: 'state', width: '20%' },
  { title: '', key: 'actions', width: '10%', filterable: false },
])

const page = ref(1)
onMounted(async () => {
  vehicleStore.getVehicles()
})
watch(page, prevPage => {
  vehicleStore.updatePageFilter(prevPage)
})
</script>
