import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/auth/LoginView.vue'
import HomeView from '../views/app/HomeView.vue'
import RegisterView from '../views/auth/RegisterView.vue'
import AppLayout from '../components/layouts/AppLayout.vue'
import AuthLayout from '../components/layouts/AuthLayout.vue'
import { useUserStore } from '@/stores/user'

const PROTECTED_ROUTES = ['home']

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'appRoutes',
      component: AppLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
      ],
    },
    {
      path: '/auth',
      name: 'authRoutes',
      component: AuthLayout,

      children: [
        {
          path: '/login',
          name: 'login',
          component: LoginView,
        },
        {
          path: '/register',
          name: 'register',
          component: RegisterView,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'errorRoutes',
      component: AppLayout,
      children: [
        {
          path: '/:pathMatch(.*)*',
          name: 'ErrorView',
          component: () => import('../views/error/ErrorView.vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (
    PROTECTED_ROUTES.includes(to.name!.toString()) &&
    !userStore.isAuthenticated()
  ) {
    next({ name: 'login' })
    return
  }
  if (
    PROTECTED_ROUTES.includes(to.name!.toString()) &&
    userStore.isAuthenticated()
  ) {
    next()
    return
    // next({ name: 'home' })
  }
  next()
})

export default router
