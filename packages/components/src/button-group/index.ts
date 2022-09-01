import { App } from "vue";
import ButtonGroup from "./ButtonGroup.vue";

ButtonGroup.install = (Vue: App) => {
  Vue.component(ButtonGroup.name, ButtonGroup);
};

export default ButtonGroup;
