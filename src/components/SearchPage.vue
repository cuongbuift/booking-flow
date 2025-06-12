<template>
  <div class="booking-info">
    <!-- Guests Dropdown -->
    <div class="dropdown dropdown-guests" ref="guestsDropdown">
      <button class="dropdown-btn" @click="toggleDropdown">
        <span>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <circle cx="10.5" cy="4.5" r="3.5" fill="black" opacity="0.6" />
            <path
              d="M7 10.5c0-2 1.6-3.5 3.5-3.5S14 8.5 14 10.5v3h-7v-3z"
              fill="black"
              opacity="0.6"
            />
            <circle cx="6" cy="4.5" r="3.5" fill="black" />
            <path d="M2 10.5c0-2 1.6-3.5 3.5-3.5S9 8.5 9 10.5v3H2v-3z" fill="black" />
          </svg>
          <span class="dropdown-text">{{ guestText }}</span>
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
      <div class="dropdown-menu" v-show="openDropdown" @click.stop>
        <div
          class="guest-picker-item"
          v-for="(label, key) in { adults: 'Adults', children: 'Children', rooms: 'Rooms' }"
          :key="key"
        >
          <label>{{ label }}</label>
          <div class="custom-counter">
            <button :disabled="guests[key] <= (key === 'children' ? 0 : 1)" @click="guests[key]--">
              <svg viewBox="0 0 24 24" width="24">
                <path d="M20.25 12.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5" />
              </svg>
            </button>
            <span>{{ guests[key] }}</span>
            <button @click="guests[key]++">
              <svg viewBox="0 0 24 24" width="24">
                <path
                  d="M20.25 11.25h-7.5v-7.5a.75.75 0 0 0-1.5 0v7.5h-7.5a.75.75 0 0 0 0 1.5h7.5v7.5a.75.75 0 0 0 1.5 0v-7.5h7.5a.75.75 0 0 0 0-1.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <button type="button" class="btn-common btn-done" @click="closeDropdown()">Done</button>
      </div>
    </div>

    <!-- Datetime Dropdown -->
    <div class="date-range">
      <VueDatePicker
        v-model="dateRange"
        :min-date="new Date()"
        :format="format"
        :enable-time-picker="false"
        :range="{ minRange: 1 }"
        multi-calendars
      />
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
    &.dropdown-guests {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .dropdown-btn {
        & > span {
          display: flex;
          align-items: center;
          gap: 8px;
        }
      }
      .guest-picker-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 32px;
        .custom-counter {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .custom-counter button {
          display: flex;
          align-items: center;
          background-color: transparent;
          border: none;
          padding: 6px;
          cursor: pointer;
        }
        .custom-counter button:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .custom-counter span {
          min-width: 24px;
          text-align: center;
          font-weight: 500;
        }
      }
    }
    .btn-common {
      width: 100%;
    }
  }
  .date-range {
    width: 50%;
    @media (max-width: 767px) {
      width: 100%;
    }
  }
}
</style>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import dayjs from 'dayjs';
import { formatDateISO } from '@/helpers/format-helper';
const openDropdown = ref<boolean>(false);
// Range selection
const dateRange = ref<[Date, Date]>([new Date(), dayjs(new Date()).add(1, 'day').toDate()]);
// Guests
const guests = ref({
  adults: 1,
  children: 0,
  rooms: 1,
});

const router = useRouter();

const search = () => {
  router.push({
    path: '/room',
    query: {
      ...guests.value,
      fromDate: formatDateISO(dateRange.value[0]),
      toDate: formatDateISO(dateRange.value[1]),
    },
  });
};

const guestText = computed(() => {
  return `${guests.value.adults} Adult${guests.value.adults > 1 ? 's' : ''}, ${guests.value.children} Child${guests.value.children !== 1 ? 'ren' : ''}, ${guests.value.rooms} Room${guests.value.rooms > 1 ? 's' : ''}`;
});

const format = (dates: Date[]) => {
  const f = (date: Date) => {
    return dayjs(date).format('DD-MMM-YYYY');
  };

  return `${f(dates[0])} ⇀ ${f(dates[1])}`;
};

const toggleDropdown = () => {
  openDropdown.value = !openDropdown.value;
  console.log(openDropdown.value);
};

const closeDropdown = () => {
  openDropdown.value = false;
};

function onClickOutside(e: MouseEvent) {
  const target = e.target as HTMLElement;
  if (!target.closest('.dropdown')) {
    closeDropdown();
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside);
});
</script>
