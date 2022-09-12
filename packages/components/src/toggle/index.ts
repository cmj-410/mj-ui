import { App } from 'vue'
import Toggle from './Toggle.vue'

export default {
  Toggle,
  install(Vue: App) {
    Vue.component(this.Toggle.name, this.Toggle)
  },
}
