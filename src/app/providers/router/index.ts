import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import FeedPage from "@/pages/feed";
import MediaPage from "@/pages/media/ui/MediaPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: FeedPage,
  },
  {
    path: "/media/:id",
    name: "media",
    component: MediaPage,
  },
  {
    path: "/character/:id",
    name: "character",
    component: MediaPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
