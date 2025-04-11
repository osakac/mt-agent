import { createRouter, createWebHistory } from 'vue-router'

export enum RouteNames {
  Login = 'login',
  Register = 'register',
  Cabinet = 'cabinet',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: RouteNames.Login,
      component: () => import('@/pages/login/LoginPage.vue'),
      meta: {
        showNavigationPanel: false,
      },
    },
    {
      path: '/register',
      name: RouteNames.Register,
      component: () => import('@/pages/register/RegisterPage.vue'),
      meta: {
        showNavigationPanel: false,
      },
    },
    {
      path: '/cabinet',
      name: RouteNames.Cabinet,
      component: () => import('@/pages/cabinet/CabinetPage.vue'),
      meta: {
        showNavigationPanel: true,
      },
    },
  ],
})

export default router
