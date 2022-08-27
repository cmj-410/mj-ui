import { App } from "vue";
import Icon from "./Icon.vue";

Icon.install = (Vue: App) => {
  Vue.component(Icon.name, Icon);
};

export default Icon;
