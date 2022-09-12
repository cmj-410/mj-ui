import { App } from 'vue'
import NumberInput from './numberInput.vue'

export default {
  NumberInput,
  install(Vue: App) {
    Vue.component(this.NumberInput.name, this.NumberInput)
  },
}
