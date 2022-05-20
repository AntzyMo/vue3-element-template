import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 清除默认样式
import 'normalize.css/normalize.css'

// 路由守卫
import './permission'
// import './mock'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
