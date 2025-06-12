import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
    user: { email: '' },
    bookingDetails: null,
  }),
  actions: {
    login(email: string, password: string) {
      if (email && password) {
        this.user = { email };
        this.isAuthenticated = true;
        return true;
      }
      return false;
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
      this.bookingDetails = null;
    },
    saveBooking(details) {
      this.bookingDetails = details;
    },
  },
});
