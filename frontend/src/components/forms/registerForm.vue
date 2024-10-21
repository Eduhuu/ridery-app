<template>
  <v-form class="d-flex flex-column ga-0" @submit.prevent="handleSubmit">
    <text-field
      placeholder="Ingrese correo electronico"
      name="email"
      label="Correo electronico"
      v-model="form.email"
      type="text"
      :rules="[rules.required, rules.emailMatch]"
    />
    <text-field
      placeholder="Ingrese contraseña"
      name="password"
      label="Ingrese contraseña"
      v-model="form.password"
      type="password"
      counter
      hint="La contraseña debe de tener como minimo 4 caracteres."
      :rules="[rules.required, rules.min]"
    />
    <text-field
      placeholder="Confirme contraseña"
      name="confirmPassword"
      label="Confirme contraseña"
      v-model="form.confirmPassword"
      type="password"
      counter
      hint="Este campo debe de ser igual al de contraseña."
      :rules="[rules.required, rules.equalPasswords]"
    />
    <v-btn variant="tonal" class="" type="submit" block>Crear</v-btn>
  </v-form>
</template>
<script lang="ts" setup>
import TextField from '../fields/TextField.vue'
import { userRegister } from '@/fetchers/user'
import { ref } from 'vue'

const form = ref({
  email: '',
  password: '',
  confirmPassword: '',
})

const rules = ref({
  required: (value: string) => !!value || 'Este campo es requerido.',
  min: (value: string) =>
    value.length > 4 ? true : 'El campo debe de tener mas de 4 caracteres.',
  emailMatch: (value: string) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
      ? true
      : 'Email invalido.',
  equalPasswords: (value: string) =>
    form.value.password === value
      ? true
      : 'Las contraseñas deben de ser iguales.',
})

const handleSubmit = async () => {
  await userRegister({ email: form.value.email, password: form.value.password })
}
</script>
