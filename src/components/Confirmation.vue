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

    <div class="booking-info">
      <div class="left-content">
        <div class="flex-box">
          <img :src="store.room.image" :alt="store.room.title" class="room-thumbnail" />
          <div>
            <h4 class="room-title">{{ store.room.title }}</h4>
            <p>1 GUEST</p>
          </div>
        </div>
        <strong>PACKAGE:</strong>
        <div class="fees">
          <span>Room</span>
          <span>{{ formatCurrency(store.roomPrice, 2) }}</span>
        </div>
        <div class="fees">
          <span>Tax & Service Charges (9%)</span>
          <span>{{ formatCurrency(store.tax, 2) }}</span>
        </div>
        <div class="fees">
          <span>Total Price</span>
          <span>{{ formatCurrency(store.totalPrice, 2) }}</span>
        </div>
      </div>

      <div class="guest-detail">
        <h5>GUEST DETAILS</h5>
        <p>Name: {{ store.contact.title }} {{ store.contact.fullName }}</p>
        <p>Email address: {{ store.contact.emailAddress }}</p>
      </div>
    </div>
  </div>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/my-account">Your booking</RouterLink>
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
  .booking-info {
    display: flex;
    padding: 1rem;
    text-align: left;
    background: var(--vt-c-gray);
    border: 1px solid var(--vt-c-gray-soft);
    @media (max-width: 767px) {
      flex-direction: column;
    }
    .left-content {
      flex: 1;
      padding-right: 1rem;
      @media (max-width: 767px) {
        margin-bottom: 2rem;
      }
    }
    .room-thumbnail {
      width: 100%;
      max-width: 100px;
      aspect-ratio: 340/210;
      object-fit: cover;
      margin-right: 1rem;
    }
    .room-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    .flex-box {
      display: flex;
      align-items: flex-start;
      text-align: left;
      margin-bottom: 1rem;
    }
    strong {
      margin-bottom: 1rem;
    }
    .fees {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      &:last-child {
        margin-bottom: 0;
        span {
          font-size: 1rem;
        }
      }
      span {
        font-size: 0.875rem;
        color: #666;
        letter-spacing: 1px;
      }
    }
    .guest-detail {
      width: 35%;
      padding: 1.5rem 1rem;
      background: var(--vt-c-gray-mute);
      @media (max-width: 767px) {
        width: 100%;
      }
      h5 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { formatCurrency, formatDate } from '../helpers/formatHelper';
import useBookingStore from '../stores/bookingStore';
const store = useBookingStore();
const router = useRouter();
onMounted(() => {
  if (!store.contact?.name) router.push('/');
});
</script>
