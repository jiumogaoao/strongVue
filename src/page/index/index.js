import Vue from "vue";
import Tpl from "./template.vue";
import "@assets/style/main.scss";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = resolve => require(["./home.vue"], resolve);
const Login = resolve => require(["./login.vue"], resolve);
const Register = resolve => require(["./register.vue"], resolve);

const routes = [
  { path: "", component: Home },
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

new Vue({
  router:router,
  render:h => h(Tpl),
}).$mount("#app");
