import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css'
import 'md-editor-v3/lib/preview.css'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
