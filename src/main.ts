import { createPinia } from 'pinia'
import { createApp } from 'vue'

import '@/assets/css/index.css'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import PrimeVueConfig from './plugins/prime-vue/prime-vue.config'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, PrimeVueConfig)

app.mount('#app')
