<template>
  <BookingSteps :step="2" />
  <ListingRoom />
</template>

<script setup lang="ts">
import BookingSteps from '../components/BookingSteps.vue';
import ListingRoom from '../components/ListingRoom.vue';
</script>
