<template>
  <div class="container">
    <header>
      <img src="./assets/room.webp" alt="book a room" class="banner" />
      <h1 class="title">BOOK A ROOM</h1>
    </header>
    <RouterView />
  </div>
</template>

<style scoped lang="less">
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
}

header {
  text-align: center;
  .banner {
    width: 100%;
    aspect-ratio: 1000/400;
    object-fit: cover;
    margin-bottom: 1.5rem;
  }
}

h1.title {
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 3rem;
}

@media (min-width: 1024px) {
}
</style>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
</script>
