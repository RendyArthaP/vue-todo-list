import { createRouter, createWebHistory } from "vue-router";

import TodoPages from "../pages/TodoPages.vue";
import UserPages from "../pages/UserPages.vue";

const routes = [
  {
    path: "/",
    name: "TodoPages",
    component: TodoPages,
  },
  {
    path: "/users",
    name: "UserPages",
    component: UserPages,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
