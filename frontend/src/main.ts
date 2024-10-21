import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import type { PluginOptions } from 'vue-toastification'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'
import { aliases } from 'vuetify/iconsets/fa-svg'
import { mdi } from 'vuetify/iconsets/mdi-svg'

const app = createApp(App)
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    // sets: {
    //   mdi,
    // },
  },
  components,
  directives,
})

const toastOptions = {
  position: POSITION.BOTTOM_RIGHT,
  timeout: 3000,
} as PluginOptions

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(Toast, toastOptions)

app.mount('#app')
