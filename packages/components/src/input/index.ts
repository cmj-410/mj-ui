import { App } from 'vue'
import Input from './Input.vue'

export default {
  Input,
  install(Vue: App) {
    Vue.component(this.Input.name, this.Input)
  },
}
