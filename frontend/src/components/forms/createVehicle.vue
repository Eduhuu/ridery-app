<template>
  <v-form @submit.prevent="handleSubmit" class="">
    <!-- <pre>{{ form }}</pre> -->
    <text-field
      placeholder="Marca"
      name="brand"
      label="Ingrese marca del vehículo"
      v-model="form.brand"
      type="text"
      :rules="[rules.required]"
    />
    <text-field
      placeholder="Ingrese modelo"
      name="model"
      label="Ingrese modelo"
      v-model="form.model"
      type="text"
      :rules="[rules.required]"
    />
    <number-field
      dense
      name="year"
      label="Seleccione el año"
      v-model.number="form.year"
      placeholder="Ingrese un año"
      :rules="[rules.required, rules.min, rules.max]"
    ></number-field>
    <label for="state">Estado del vehículo</label>
    <v-select
      density="compact"
      variant="outlined"
      id="state"
      :items="['disponible', 'mantenimiento']"
      v-model="form.state"
    />
    <v-btn variant="tonal" class="" type="submit" block>Crear vehículo</v-btn>
  </v-form>
</template>
<script lang="ts" setup>
import TextField from '../fields/TextField.vue'
import NumberField from '../fields/NumberField.vue'
import { ref } from 'vue'
import { useVehicleStore } from '@/stores/vehicle'

const vehicleStore = useVehicleStore()

const form = ref({
  brand: '',
  model: '',
  year: new Date().getFullYear(),
  state: 'disponible',
})
const rules = ref({
  required: (value: string) => !!value || 'Este campo es requerido.',
  min: (value: string) =>
    parseInt(value) > 1900 ? true : 'El año debe de ser mayor a 1900.',
  max: (value: string) =>
    parseInt(value) < new Date().getFullYear() + 1
      ? true
      : `El año debe de ser menor a ${new Date().getFullYear() + 1}.`,
})

const handleSubmit = async () => {
  // await vehicleStore.createVehicle(form.value)
  vehicleStore.createVehicle(form.value)
}
</script>
