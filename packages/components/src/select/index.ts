import { App } from 'vue'
import Select from './Select.vue'

export default {
  Select,
  install(Vue: App) {
    Vue.component(this.Select.name, this.Select)
  },
}
