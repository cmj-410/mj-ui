import { App } from 'vue'
import Modal from './Modal.vue'

Modal.install = (Vue: App) => {
  Vue.component(Modal.name, Modal)
}

export default Modal
