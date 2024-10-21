<template>
  <div class="d-flex flex-column ga-2">
    <div class="d-flex justify-space-between align-center">
      <div class="d-flex align-center ga-2">
        <button-menu
          classConteiner="d-flex flex-column ga-2 px-4 py-2 pb-4"
          maxWidth="300"
          icon="mdi-filter"
        >
          <h2 class="text-h6">Filtrar contenido</h2>
          <filter-vehicle />
        </button-menu>
        <h1 class="text-h6">Vehículos disponibles</h1>
      </div>
      <button-modal dialogTitle="Crear un vehiculo" appendicon="mdi-plus">
        <create-vehicle />
      </button-modal>
    </div>
    <search-field
      :onEnter="() => vehicleStore.getVehicles()"
      v-model="vehicleStore.filter.text"
    />
    <table-data-vehicle />
  </div>
</template>
<script lang="ts" setup>
// import TableVehicles from '@/components/tables/tableVehicles.vue'
import TableDataVehicle from '@/components/tables/tableDataVehicle.vue'
import ButtonModal from '@/components/buttonModal/ButonModal.vue'
import CreateVehicle from '@/components/forms/createVehicle.vue'
import FilterVehicle from '../../components/filter/FilterVehicle.vue'
import ButtonMenu from '@/components/buttonMenu/ButtonMenu.vue'
import { useVehicleStore } from '@/stores/vehicle'
import SearchField from '@/components/fields/SearchField.vue'
const vehicleStore = useVehicleStore()
</script>
