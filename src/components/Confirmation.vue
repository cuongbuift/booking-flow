<template>
  <div class="confirmation">
    <div class="text-content">
      <h2>YOUR BOOKING HAS BEEN CONFIRMED</h2>
      <p>We have sent your booking confirmation to the email address that you have provided.</p>
      <p>
        Check-in/Check-out: <strong>{{ formatDate(store.fromDate) }}</strong>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 12H20L14 6M20 12L14 18"
            stroke="black"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <strong>{{ formatDate(store.toDate) }}</strong>
      </p>
      <p>
        Booking Confirmation Number: <strong>{{ store.no }}</strong>
      </p>
      <p>
        Total Price for {{ store.night }} Night:
        <strong>{{ formatCurrency(store.totalPrice, 2) }}</strong>
      </p>
    </div>

    <BookingItem :booking="store.getBooking" />
  </div>
  <div class="button-group">
    <button type="button" class="btn-common" @click="router.push('/')">HOME</button>
    <button type="button" class="btn-common" @click="router.push('/my-account')">
      YOUR BOOKING
    </button>
  </div>
</template>
<style scoped lang="less">
.confirmation {
  .text-content {
    margin-bottom: 2rem;
    text-align: center;
    h2 {
      font-size: 1.8rem;
      font-weight: 400;
      margin-bottom: 2rem;
      @media (max-width: 767px) {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
    }
    p {
      letter-spacing: 1px;
    }
  }
}
.button-group {
  margin-top: 2rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
}
</style>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import BookingItem from '../components/BookingItem.vue';
import { formatCurrency, formatDate } from '../helpers/formatHelper';
import useBookingStore from '../stores/bookingStore';
const store = useBookingStore();
const router = useRouter();
onMounted(() => {
  if (!store.contact?.fullName) router.push('/');
});
</script>
