import {
  createRouter,
  createWebHistory,
  type NavigationGuardWithThis,
  type RouteRecordRaw,
} from 'vue-router';
import { useUserStore } from '../stores/userStore';

const authGuard: NavigationGuardWithThis<unknown> = (to, from, next) => {
  const store = useUserStore();
  if (store.isAuthenticated) {
    next();
  } else {
    next('/login');
  }
};

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/search' },
  { path: '/login', component: () => import('../views/LoginView.vue') },
  {
    path: '/booking',
    component: () => import('../views/BookingView.vue'),
    //beforeEnter: authGuard,
  },
  {
    path: '/summary',
    component: () => import('../views/SummaryView.vue'),
    //beforeEnter: authGuard,
  },
  {
    path: '/search',
    component: () => import('../views/SearchPage.vue'),
  },
  {
    path: '/room',
    component: () => import('../views/ListingRoom.vue'),
  },
  {
    path: '/contact-details',
    component: () => import('../views/ContactDetails.vue'),
  },
  {
    path: '/confirmation',
    component: () => import('../views/Confirmation.vue'),
  },
];
const history = createWebHistory();

export default createRouter({
  history,
  routes,
});
