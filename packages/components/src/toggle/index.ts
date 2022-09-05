import { App } from 'vue'
import Toggle from './Toggle.vue'

Toggle.install = (Vue: App) => {
  Vue.component(Toggle.name, Toggle)
}

export default Toggle
