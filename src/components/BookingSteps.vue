<template>
  <div class="booking-steps">
    <div class="item">
      <span>1</span>
      <span>SEARCH</span>
    </div>
    <div class="item">
      <span>2</span>
      <span>SELECT ROOM</span>
    </div>
    <div class="item disabled">
      <span>3</span>
      <span>CONTACT DETAILS</span>
    </div>
    <div class="item disabled">
      <span>4</span>
      <span>CONFIRMATION</span>
    </div>
  </div>
</template>
<style scoped lang="less">
.booking-steps {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  background-color: #f0f1eb;
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
        color: #fff;
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        background-color: #000;
        border-radius: 50%;
        margin-right: 1rem;
      }
    }
  }
}
</style>
<script setup lang="ts"></script>
