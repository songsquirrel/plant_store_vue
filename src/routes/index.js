import { createRouter, createWebHistory } from "vue-router";

// auto loading
// import Home from "../views/Home.vue"
// import Course from "../views/Course.vue"
// import Hints from "../views/Hints.vue"
// import IndoorPlant from "../views/IndoorPlant.vue"
// import Tools from "../views/Tools.vue"

// lazy loading
const routes = [
  {path: "/", component: () => import("../views/Home.vue") },
  {path: "/indoorPlant", component: () => import("../views/IndoorPlant.vue") },
  {path: "/tools", component: () => import("../views/Tools.vue") },
  {path: "/hints", component: () => import("../views/Hints.vue") },
  {path: "/course", component: () => import("../views/Course.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
