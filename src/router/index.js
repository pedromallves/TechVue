import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/ProductsView.vue"),
    },
    {
      path: "/products/:id",
      name: "product",
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: () => import("../views/NewsView.vue"),
    },
    // {
    //   path: "/news/:id",
    //   name: "newsletter",
    //   component: () => import("../views/NewsletterView.vue"),
    // },
    {
      path: "/404",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },
  ],
});

export default router;
