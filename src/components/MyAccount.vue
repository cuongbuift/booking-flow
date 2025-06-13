<template>
  <h2 class="booking up-coming">Up coming booking</h2>
  <BookingItem
    v-for="booking in upComingBooking"
    :key="booking.no"
    :booking="booking"
    :showInfo="true"
  />
  <hr />
  <h2 class="booking pass">Pass booking</h2>
  <BookingItem
    v-for="booking in passBooking"
    :key="booking.no"
    :booking="booking"
    :showInfo="true"
  />
</template>
<style scoped lang="less">
.booking {
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-weight: 700;
  &.up-coming {
    color: #035900;
  }
  &.pass {
    margin-top: 1rem;
    color: #c27e00;
  }
}
</style>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { generateBooking, getPassBooking, getUpComingBooking } from '../services/mock.service';
import type { Booking } from '../types';
import BookingItem from './BookingItem.vue';
const upComingBooking = ref<Booking[]>([]);
const passBooking = ref<Booking[]>([]);
onMounted(async () => {
  generateBooking();
  await getUpcoming();
  await getPass();
});

const getUpcoming = async () => {
  const data = await getUpComingBooking();
  upComingBooking.value = [...data];
};
const getPass = async () => {
  const data = await getPassBooking();
  passBooking.value = [...data];
};
</script>
