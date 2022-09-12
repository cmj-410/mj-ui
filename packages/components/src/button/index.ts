import { App } from 'vue'
import Button from './Button.vue'

export default {
  Button,
  install(Vue: App) {
    Vue.component(this.Button.name, this.Button)
  },
}
