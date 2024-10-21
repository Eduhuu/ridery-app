<template>
  <v-form class="d-flex flex-column ga-1" @submit.prevent="handleSubmit">
    <text-field
      placeholder="Correo electronico"
      name="email"
      label="Correo electronico"
      v-model="form.email"
      type="text"
      :rules="[rules.required]"
    />
    <text-field
      placeholder="Contraseña"
      name="password"
      label="Ingrese contraseña"
      v-model="form.password"
      type="password"
      :rules="[rules.required]"
    />
    <v-btn variant="tonal" type="submit" block>Iniciar sesión</v-btn>
  </v-form>
</template>
<script lang="ts" setup>
import TextField from '../fields/TextField.vue'
import { ref } from 'vue'
import { useUserStore } from '../../stores/user'
const userStore = useUserStore()

const form = ref({
  email: '',
  password: '',
})
const rules = ref({
  required: (value: string) => !!value || 'Este campo es requerido.',
})

const handleSubmit = async () => {
  await userStore.login(form.value)
}
</script>
