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
    const returnUrl = to.fullPath;
    next({ path: '/login', query: { returnUrl } });
  }
};

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/bookingView.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/SearchView.vue'),
      },
      {
        path: '/room',
        component: () => import('../views/ListingRoomView.vue'),
      },
      {
        path: '/contact-details',
        component: () => import('../views/ContactDetailView.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/confirmation',
        component: () => import('../views/ConfirmationView.vue'),
        beforeEnter: authGuard,
      },
    ],
  },
  { path: '/login', component: () => import('../views/LoginView.vue') },
  { path: '/my-account', component: () => import('../views/MyAccountView.vue') },
];
const history = createWebHistory();

export default createRouter({
  history,
  routes,
});
