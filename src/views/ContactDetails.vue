<template>
  <BookingSteps :step="3" />
  <ContactDetails />
</template>

<script setup lang="ts">
import BookingSteps from '../components/BookingSteps.vue';
import ContactDetails from '../components/ContactDetails.vue';
</script>
