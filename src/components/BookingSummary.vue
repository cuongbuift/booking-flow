<template>
  <div v-if="booking">
    <h2>Booking Summary</h2>
    <p>Destination: {{ booking.destination }}</p>
    <p>Date: {{ booking.date }}</p>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/userStore'
const userStore = useUserStore()
const booking = userStore.bookingDetails
</script>
