import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
    user: null,
    bookingDetails: null
  }),
  actions: {
    login(email, password) {
      if (email && password) {
        this.user = { email }
        this.isAuthenticated = true
        return true
      }
      return false
    },
    logout() {
      this.isAuthenticated = false
      this.user = null
      this.bookingDetails = null
    },
    saveBooking(details) {
      this.bookingDetails = details
    }
  }
})