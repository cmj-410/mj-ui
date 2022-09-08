import { createApp } from 'vue'
import App from './app.vue'
const app = createApp(App)
// import mjUI from 'mj-ui/dist/es/packages/components/index.js'
// import mjUI from 'mj-ui/dist/es/index'
import mjUI from 'mj-ui'
// import mjUI from '@tongy-cai/mj-ui'
app.use(mjUI)
app.mount('#app')
