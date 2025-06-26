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
  min-height: calc(100vh - 550px);
}
</style>
<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';
</script>
