<template>
  <div class="container">
    <Header />
    <div class="content">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>
<style scoped lang="less">
.content {
  padding: 0 2rem;
  min-height: calc(100vh - 550px); /* Adjust based on header/footer height */
  @media (max-width: 767px) {
    padding: 0 1rem;
  }
}
</style>
<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';
</script>
