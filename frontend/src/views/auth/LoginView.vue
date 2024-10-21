<template>
  <div class="d-flex justify-center">
    <v-sheet
      elevation="1"
      class="d-flex flex-column ga-2 w-25 px-4 py-2 border rounded"
    >
      <h1 class="text-h6 font-weight-bold">Login</h1>
      <v-divider></v-divider>
      <LoginForm />
      <v-divider></v-divider>
      <div class="d-flex justify-space-between text-subtitle-2">
        <p class="">¿No posee una cuenta?</p>
        <a class="" href="/register"> Registrate. </a>
      </div>
    </v-sheet>
  </div>
</template>
<script setup lang="ts">
import LoginForm from '../../components/forms/loginForm.vue'
</script>
