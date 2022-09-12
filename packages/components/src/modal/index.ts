import { App } from 'vue'
import Modal from './Modal.vue'

export default {
  Modal,
  install(Vue: App) {
    Vue.component(this.Modal.name, this.Modal)
  },
}
