import Vue from "vue";
import App from "./App.vue";
import ElementUI from "./element-config";
import "@/assets/css/element-variables.scss";

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
