import { createRouter, createWebHistory, type NavigationGuardWithThis } from 'vue-router'
import { useUserStore } from '../stores/userStore'

const authGuard: NavigationGuardWithThis<unknown> = (to, from, next) => {
  const store = useUserStore()
  if (store.isAuthenticated) {
    next()
  } else {
    next('/login')
  }
}

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: () => import('../views/LoginView.vue'), },
    {
      path: '/booking',
      component: () => import('../views/BookingView.vue'),
      beforeEnter: authGuard
    },
    {
      path: '/summary',
      component: () => import('../views/SummaryView.vue'),
      beforeEnter: authGuard
    }
  ]
});