<template>
  <div class="booking-info">
    <div class="left-content">
      <div class="flex-box">
        <img
          :src="props.booking?.room?.image"
          :alt="props.booking?.room?.title"
          class="room-thumbnail"
        />
        <div>
          <h4 class="room-title">{{ props.booking?.room?.title }}</h4>
          <p class="guests">{{ guestText }}</p>
        </div>
      </div>
      <strong>PACKAGE:</strong>
      <div class="fees">
        <span>Room</span>
        <span>{{ formatCurrency(props.booking?.roomPrice, 2) }}</span>
      </div>
      <div class="fees">
        <span>Tax & Service Charges (9%)</span>
        <span>{{ formatCurrency(props.booking?.tax, 2) }}</span>
      </div>
      <div class="fees">
        <span>Total Price</span>
        <span>{{ formatCurrency(props.booking?.totalPrice, 2) }}</span>
      </div>
    </div>

    <div class="guest-detail">
      <template v-if="props.showInfo">
        <h5>BOOKING INFORMATION</h5>
        <p>
          Booking No: <b>#{{ props.booking?.no }}</b>
        </p>
        <p>
          Booking Date: <b>{{ formatDate(props.booking?.bookingDate) }}</b>
        </p>
        <p>
          Check-in/Check-out: <b>{{ formatDate(props.booking?.fromDate) }}</b>
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
          <b>{{ formatDate(props.booking?.toDate) }}</b>
        </p>
      </template>
      <h5 class="mt">GUEST DETAILS</h5>
      <p>Name: {{ props.booking?.contact?.title }} {{ props.booking?.contact?.fullName }}</p>
      <p>Email address: {{ props.booking?.contact?.emailAddress }}</p>
    </div>
  </div>
</template>
<style scoped lang="less">
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
    .guests {
      text-transform: uppercase;
    }
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
    b {
      font-weight: 700;
    }
    h5 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;

      &.mt {
        margin-top: 1rem;
      }
    }
  }
}
</style>
<script setup lang="ts">
import { computed } from 'vue';
import { formatCurrency, formatDate } from '../helpers/formatHelper';
import type { Booking } from '../types';
const guestText = computed(() => {
  return `${props.booking?.adults} Adult${(props.booking?.adults || 0) > 1 ? 's' : ''}, ${props.booking?.children} Child${props.booking?.children !== 1 ? 'ren' : ''}`;
});
const props = defineProps<{
  booking: Booking;
  showInfo?: boolean;
}>();
</script>
