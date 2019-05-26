import Vue from "vue";
import Tpl from "./template.vue";
import "@assets/style/main.scss";
import {router} from "./router.js";
import {store} from "./store/store.js";





new Vue({
  router:router,
  render:h => h(Tpl),
  store: store,
}).$mount("#app");
