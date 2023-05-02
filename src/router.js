import { createWebHistory, createRouter } from "vue-router";
import Main from "./components/Main.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/main",
    component: Main,
  },
  {
    path: "/detail",
    component: Detail,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 