import type { User } from '@/types';
import { defineStore } from 'pinia';
const key = 'user';
const saveLocalStorage = (user: User) => {
  localStorage.setItem(key, JSON.stringify(user));
};
const getLocalStorage = (): User => {
  return JSON.parse(localStorage.getItem(key) || '{}');
};

export const useUserStore = defineStore('user', {
  state: () => getLocalStorage(),
  actions: {
    login(email: string, password: string) {
      if (email && password) {
        this.email = email;
        saveLocalStorage({
          email,
        });
        return true;
      }
      return false;
    },
    logout() {
      this.email = undefined;
      saveLocalStorage({
        email: undefined,
      });
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.email;
    },
  },
});
