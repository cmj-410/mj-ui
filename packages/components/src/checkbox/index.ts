import { App } from 'vue'
import Checkbox from './Checkbox.vue'

export default {
  Checkbox,
  install(Vue: App) {
    Vue.component(this.Checkbox.name, this.Checkbox)
  },
}
