import { App } from 'vue'
import ButtonGroup from './ButtonGroup.vue'

export default {
  ButtonGroup,
  install(Vue: App) {
    Vue.component(this.ButtonGroup.name, this.ButtonGroup)
  },
}
