import { createRouter, createWebHistory } from "vue-router";
import { loadLayoutMiddleware } from "@/router/middleware";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/general"),
  },
  {
    path: "/login",
    name: "login",
    meta: { layout: "emptyLayout" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/pages/login"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(loadLayoutMiddleware);

export default router;
