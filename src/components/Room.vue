<template>
  <div class="room-item">
    <div class="img-block">
      <img :src="props.room?.image" :alt="props.room?.title" class="room-thumbnail" />
    </div>

    <div class="room-info">
      <h4 class="room-title">{{ props.room?.title }}</h4>
      <h6>{{ props.room?.description }}</h6>
      <p class="desc">
        {{ props.room?.content }}
      </p>
    </div>

    <div class="book-room-block">
      <p class="price">
        <span>{{ formatCurrency(props.room?.price) }}</span
        >/night
      </p>
      <p>Subject to GST and charges</p>
      <button type="button" class="btn-common" @click="selectRoom">BOOK ROOM</button>
    </div>
  </div>
</template>
<style scoped lang="less">
.room-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  background-color: var(--vt-c-gray);
  border: 1px solid var(--vt-c-gray-soft);
  @media (max-width: 767px) {
    flex-direction: column;
    padding: 1rem;
  }
  .img-block {
    width: 35%;
    @media (max-width: 767px) {
      max-width: 100%;
    }
    .room-thumbnail {
      width: 100%;
      max-width: 32.5rem;
      aspect-ratio: 340/210;
      object-fit: cover;
      padding: 1rem 0 1rem 1rem;
      @media (max-width: 767px) {
        max-width: unset;
        padding: 0;
      }
    }
  }
  .room-info {
    flex: 1;
    padding: 1rem 0;
    .room-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    h6 {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    .desc {
      font-size: 0.875rem;
      color: #666;
      margin-bottom: 0;
    }
  }
  .price {
    margin-bottom: 1rem;
    span {
      font-size: 2rem;
      font-weight: 600;
    }
  }
  .book-room-block {
    padding: 0 1rem;
    background: var(--vt-c-gray-mute);
    @media (max-width: 767px) {
      padding: 0 1rem 1rem;
    }
  }
  .btn-common {
    margin-top: 2.5rem;
  }
}
</style>
<script setup lang="ts">
import { RoomInfo } from '../types';
import { formatCurrency } from '../helpers/formatHelper';
const props = defineProps<{
  room: RoomInfo;
}>();
const emit = defineEmits(['selectRoom']);
const selectRoom = () => {
  emit('selectRoom', props.room);
};
</script>
