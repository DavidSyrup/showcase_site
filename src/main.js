import { createApp } from 'vue'
import { Plugin } from 'vue-responsive-video-background-player'
import App from './App.vue/'
import router from './router/'

import './assets/main.css/'

const app = createApp(App)
app.use(router)
app.use(Plugin)
app.mount('#app')
