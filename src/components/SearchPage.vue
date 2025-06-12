<template>
  <div class="booking-info">
    <div class="dropdown">
      <button class="dropdown-btn">
        <span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            class="vertical-bottom"
          >
            <circle cx="10.5" cy="4.5" r="3.5" fill="black" opacity="0.6" />
            <path
              d="M7 10.5c0-2 1.6-3.5 3.5-3.5S14 8.5 14 10.5v3h-7v-3z"
              fill="black"
              opacity="0.6"
            />
            <circle cx="6" cy="4.5" r="3.5" fill="black" />
            <path d="M2 10.5c0-2 1.6-3.5 3.5-3.5S9 8.5 9 10.5v3H2v-3z" fill="black" />
          </svg>

          <span class="dropdown-text">Select Guests</span>
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">1</a>
        <a class="dropdown-item" href="#">2</a>
        <a class="dropdown-item" href="#">3</a>
      </div>
    </div>

    <div class="dropdown dropdown-datetime">
      <button class="dropdown-btn">
        <span class="dropdown-text">Select Date & Time</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div class="dropdown-menu">
        <VueDatePicker v-model="date"></VueDatePicker>
      </div>
    </div>
  </div>
  <button type="button" class="btn-common center-block" @click="search">SEARCH FOR ROOMS</button>
</template>
<style scoped lang="less">
.booking-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-bottom: 2rem;
  @media (max-width: 767px) {
    flex-direction: column;
  }
  .dropdown {
    flex: 1;
    @media (max-width: 767px) {
      width: 100%;
    }
  }
}
</style>

<script setup lang="ts">
import $ from 'jquery';
import { ref, watch, onMounted } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { useRouter } from 'vue-router';

const date = ref();
const router = useRouter();

const search = () => {
  router.push('/room');
};

watch(date, (newVal) => {
  if (newVal) {
    const formatted = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date(newVal));

    $('.dropdown-datetime .dropdown-text').text(formatted);
  }
});

onMounted(() => {
  $('.dropdown-btn').click(function (e) {
    e.stopPropagation();
    const dropdown = $(this).next('.dropdown-menu');
    $('.dropdown-menu').not(dropdown).hide();
    dropdown.toggle();
  });

  $(document).click(function () {
    $('.dropdown-menu').hide();
  });

  $('.dropdown-item').click(function (e) {
    e.preventDefault();
    const textValue = $(this).text();
    const $dropdown = $(this).closest('.dropdown');
    $dropdown.find('.dropdown-text').text(textValue);
    $dropdown.find('.dropdown-menu').hide();
  });
});
</script>
