import { createRouter, createWebHistory } from 'vue-router'

export enum RouteNames {
  Login = 'login',
  Register = 'register',
  Cabinet = 'cabinet',
  Details = 'details',
  Vacancies = 'vacancies',
  CreateVacancy = 'create-vacancy',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      alias: '/',
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
    {
      path: '/details',
      name: RouteNames.Details,
      component: () => import('@/pages/details/DetailsPage.vue'),
      meta: {
        showNavigationPanel: true,
      },
    },
    {
      path: '/vacancies',
      name: RouteNames.Vacancies,
      component: () => import('@/pages/vacancies/VacanciesPage.vue'),
      meta: {
        showNavigationPanel: true,
      },
    },
    {
      path: '/create-vacancy',
      name: RouteNames.CreateVacancy,
      component: () => import('@/pages/create-vacancy/CreateVacancyPage.vue'),
      meta: {
        showNavigationPanel: true,
      },
    },
  ],
})

export default router
