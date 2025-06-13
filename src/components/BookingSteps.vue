<template>
  <div class="booking-steps">
    <RouterLink class="item" to="/">
      <span>1</span>
      <span>Search</span>
    </RouterLink>

    <RouterLink v-if="props.step > 2" :to="{ path: '/room', query: query }" class="item">
      <span>2</span>
      <span>Select room</span>
    </RouterLink>
    <div v-else class="item">
      <span>2</span>
      <span>Select room</span>
    </div>

    <RouterLink
      v-if="props.step > 3"
      class="item"
      to="/contact-details"
      :class="{ disabled: props.step < 3 }"
    >
      <span>3</span>
      <span>Contact details</span>
    </RouterLink>
    <div v-else class="item" :class="{ disabled: props.step < 3 }">
      <span>3</span>
      <span>Contact details</span>
    </div>
    <div class="item disabled">
      <span>4</span>
      <span>Confirmation</span>
    </div>
  </div>
</template>
<style scoped lang="less">
.booking-steps {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  background-color: var(--vt-c-gray);
  padding: 1rem;
  margin-bottom: 1.5rem;
  @media (max-width: 767px) {
    width: 100%;
    overflow: auto;
  }
  .item {
    display: flex;
    align-items: center;
    &.disabled {
      filter: opacity(0.5);
    }
    &:not(:last-child) {
      margin-right: 1.25rem;
    }
    span {
      display: inline-block;
      white-space: nowrap;
      font-weight: 600;
      &:first-child {
        color: var(--vt-c-white);
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        background-color: var(--vt-c-black);
        border-radius: 50%;
        margin-right: 1rem;
      }
      &:last-child {
        text-transform: uppercase;
      }
    }
  }
}
</style>
<script setup lang="ts">
import { type LocationQueryRaw, RouterLink } from 'vue-router';
import useBookingStore from '../stores/bookingStore';
const props = defineProps<{
  step: number;
}>();
const bookingStore = useBookingStore();
const query: LocationQueryRaw = {
  ...bookingStore.searchParams,
};
</script>
