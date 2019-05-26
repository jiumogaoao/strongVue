import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const Home = resolve => require(["./subpage/home.vue"], resolve);
const Login = resolve => require(["./subpage/login.vue"], resolve);
const Register = resolve => require(["./subpage/register.vue"], resolve);
const routes = [
  { path: "", component: Home },
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];
export const router = new VueRouter({
  mode: "history",
  routes: routes,
});
