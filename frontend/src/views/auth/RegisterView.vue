<template>
  <div class="d-flex justify-center">
    <v-sheet
      elevation="1"
      class="d-flex flex-column ga-2 w-25 px-4 py-2 border rounded"
    >
      <h1>Registrar</h1>
      <v-divider></v-divider>
      <RegisterForm />
      <v-divider></v-divider>
      <div class="d-flex ga-1 text-subtitle-2 justify-space-between">
        <p>¿Ya posee una cuenta?</p>
        <a href="/login">Inicie sesión</a>
      </div>
    </v-sheet>
  </div>
</template>
<script lang="ts" setup>
import RegisterForm from '../../components/forms/registerForm.vue'
</script>
<style></style>
