import { createApp } from 'vue'
import App from './app.vue'
const app = createApp(App)
import mjUI from 'mj-ui/dist/es/packages/components/index.js'
// import { mjButton } from 'mj-ui/dist/es/packages/components/index.js'
// import mjUI from 'mj-ui'
// import mjUI from '@tongy-cai/mj-ui'
// import { mjButton } from 'mj-ui'
app.use(mjUI)
// app.use(mjButton)
app.mount('#app')
