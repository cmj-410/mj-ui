import { App } from 'vue'
import NumberInput from './numberInput.vue'

NumberInput.install = (Vue: App) => {
  Vue.component(NumberInput.name, NumberInput)
}

export default NumberInput
