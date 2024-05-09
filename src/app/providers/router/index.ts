import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import FeedPage from "@/pages/feed";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: FeedPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
