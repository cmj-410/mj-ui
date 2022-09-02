import { App } from "vue";
import Input from "./Input.vue";

Input.install = (Vue: App) => {
  Vue.component(Input.name, Input);
};

export default Input;
