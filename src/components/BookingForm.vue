<template>
  <form @submit.prevent="submitBooking">
    <input v-model="destination" placeholder="Destination" required />
    <input v-model="date" type="date" required />
    <button type="submit">Confirm Booking</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'

const destination = ref('')
const date = ref('')
const router = useRouter()
const userStore = useUserStore()

const submitBooking = () => {
  userStore.saveBooking({ destination: destination.value, date: date.value })
  router.push('/summary')
}
</script>
