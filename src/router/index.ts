import { createRouter, createWebHistory } from 'vue-router'

export enum RouteNames {
  Login = 'login',
  Register = 'register',
  Home = 'home',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: RouteNames.Login,
      component: () => import('@/pages/login/LoginPage.vue'),
    },
  ],
})

export default router
