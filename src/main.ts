import { createApp } from 'vue'
import router from './router'
import pinia from './store'
import i18n from './i18n'

import './theme/index.scss'
// import './style.css'
import App from './App.vue'

createApp(App).use(router).use(pinia).use(i18n).mount('#app')
