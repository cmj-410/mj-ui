import Alert from './Alert.vue'
import { App } from 'vue'

export default {
  Alert,
  install(Vue: App) {
    Vue.component(this.Alert.name, this.Alert)
  },
}

// Alert.install = function (Vue: App) {
//   Vue.component(this.name, this)
// }
// export default Alert
