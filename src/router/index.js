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
    component: () => import(/* webpackChunkName: "about" */ "@/pages/login"),
  },
  {
    path: "/register",
    name: "register",
    meta: { layout: "emptyLayout" },
    component: () => import(/* webpackChunkName: "reg"*/ "@/pages/register"),
  },
  {
    path: "/details",
    name: "details",
    component: () => import(/* webpackChunkName: 'details'*/ "@/pages/details"),
  },
  {
    path: "/history",
    name: "history",
    component: () => import(/* webpackChunkName: 'details'*/ "@/pages/history"),
  },
  {
    path: "/categories",
    name: "categories",
    component: () =>
      import(/* webpackChunkName: 'details'*/ "@/pages/categories"),
  },
  {
    path: "/planning",
    name: "planning",
    component: () =>
      import(/* webpackChunkName: 'details'*/ "@/pages/planning"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import(/* webpackChunkName: 'details'*/ "@/pages/profile"),
  },
  {
    path: "/record",
    name: "record",
    component: () => import(/* webpackChunkName: 'details'*/ "@/pages/record"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(loadLayoutMiddleware);

export default router;
