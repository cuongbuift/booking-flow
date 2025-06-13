<template>
  <div class="search-selected-info">
    <div class="search-selected-dates">
      <span>{{ formatDate(fromDate) }}</span>
      <svg
        width="24"
        height="24"
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
      <span>{{ formatDate(toDate) }}</span>
    </div>
    <div class="search-selected-guests">
      <span>{{ night }} NIGHT</span>
      <span>|</span>
      <span>{{ adults }} ADULT(S)</span>
      <span v-if="children && children !== '0'">- {{ children }} CHILDREN</span>
    </div>
  </div>
  <div class="sort-by">
    <span>SORT BY:</span>
    <div class="dropdown">
      <button class="dropdown-btn" @click.stop="toggleDropdown">
        <span class="dropdown-text">{{ selectedOption }}</span>
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
      <div class="dropdown-menu" v-show="dropdownOpen">
        <a
          class="dropdown-item"
          href="javascript:"
          v-for="option in options"
          :key="option"
          @click="selectOption(option)"
        >
          {{ option }}
        </a>
      </div>
    </div>
  </div>
  <div>
    <Room v-for="room in rooms" :key="room.title" :room="room" @selectRoom="selectRoom" />
  </div>
</template>
<style scoped lang="less">
.search-selected-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  .search-selected-dates,
  .search-selected-guests {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .search-selected-dates {
    span {
      font-size: 1.5rem;
      font-weight: 600;
      @media (max-width: 767px) {
        font-size: 1.125rem;
      }
    }
  }
}

.sort-by {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 2rem;
  span {
    margin-right: 0.5rem;
  }
  .dropdown {
    .dropdown-btn {
      font-weight: 500;
      max-width: 200px;
      padding-right: 10px;
      background: unset;
    }
  }
}
</style>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Room from '../components/Room.vue';
import { type RoomInfo } from '../types';
import { getRooms } from '../services/mock.service';
import { formatDate } from '../helpers/formatHelper';
import useBookingStore from '../stores/bookingStore';
import dayjs from 'dayjs';

const dropdownOpen = ref(false);
const selectedOption = ref('LOWEST PRICE');
const options = ['LOWEST PRICE', 'HIGHEST PRICE'];
const router = useRouter();
const route = useRoute();
const rooms = ref<RoomInfo[]>([]);

const fromDate = route.query.fromDate as string;
const toDate = route.query.toDate as string;
const children = route.query.children as string;
const adults = route.query.adults as string;

const night = dayjs(toDate).diff(dayjs(fromDate), 'day');
const bookingStore = useBookingStore();

watch(selectedOption, async (newValue) => {
  await loadRoom();
  console.log(newValue);
});

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const closeDropdown = () => {
  dropdownOpen.value = false;
};

const selectOption = (option: string) => {
  selectedOption.value = option;
  dropdownOpen.value = false;
};

const selectRoom = (room: RoomInfo) => {
  bookingStore.selectRoom(room, fromDate, toDate, +adults, +children);
  router.push('/contact-details');
};

const loadRoom = async () => {
  rooms.value = [...(await getRooms(selectedOption.value === 'LOWEST PRICE' ? 'asc' : 'desc'))];
};

onMounted(async () => {
  loadRoom();
  document.addEventListener('click', onClickOutside);
});

function onClickOutside(e: MouseEvent) {
  const target = e.target as HTMLElement;
  if (!target.closest('.dropdown')) {
    closeDropdown();
  }
}

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside);
});
</script>
