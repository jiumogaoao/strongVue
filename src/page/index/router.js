import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const HomeCT = resolve => require(["./control/home_CT.vue"], resolve);
const LoginCT = resolve => require(["./control/login_CT.vue"], resolve);
const RegisterCT = resolve => require(["./control/register_CT.vue"], resolve);
const routes = [
  { path: "", component: HomeCT },
  { path: "/", component: HomeCT },
  { path: "/home", component: HomeCT },
  { path: "/login", component: LoginCT },
  { path: "/register", component: RegisterCT },
];
export const router = new VueRouter({
  mode: "history",
  routes: routes,
});
