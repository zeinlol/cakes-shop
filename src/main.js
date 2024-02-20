import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
const pinia = createPinia()
const app = createApp(App)
import 'primevue/resources/themes/aura-light-green/theme.css'
app.use(pinia)
app.use(PrimeVue)
app.use(ToastService)
app.mount('#app')
