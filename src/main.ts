import './assets/scss/main.scss'

import { createApp } from 'vue'
import App from './infrastructure/ui/App.vue'
import router from './infrastructure/router'

const app = createApp(App)

app.use(router)

app.mount('#app')
