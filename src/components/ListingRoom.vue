<template>
  <div class="search-selected-info">
    <div class="search-selected-dates">
      <span>JUN 17, 2025</span>
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
      <span>JUN 18, 2025</span>
    </div>
    <div class="search-selected-guests">
      <span>1 NIGHT</span>
      <span>|</span>
      <span>1 GUEST</span>
    </div>
  </div>
  <div class="sort-by">
    <span>SORT BY:</span>
    <div class="dropdown">
      <button class="dropdown-btn">
        <span class="dropdown-text">LOWEST PRICE</span>
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
        <a class="dropdown-item" href="#">LOWEST PRICE</a>
        <a class="dropdown-item" href="#">HIGHEST PRICE</a>
      </div>
    </div>
  </div>
  <div class="listing-room-block">
    <Room v-for="room in rooms" :key="room.key" :room="room" @selectRoom="selectRoom" />
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
      padding-right: 0;
      background: unset;
    }
  }
}
</style>

<script setup lang="ts">
import $ from 'jquery';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import Room from '../components/Room.vue';
import { RoomInfo } from '../types';
import { getRooms } from '../services/mock.service';

const router = useRouter();

const rooms = ref<RoomInfo[]>([]);

const selectRoom = (room: RoomInfo) => {
  console.log('Selected room:', room);

  router.push('/contact-details');
};

onMounted(async () => {
  rooms.value = await getRooms();
});

$(function () {
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
