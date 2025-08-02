<script setup lang="ts"></script>

<template>
  <div class="parentbox">
    <div class="background"><img src="./assets/img/background.webp" alt="" /></div>
    <div class="introduc"></div>
  </div>
  <router-view></router-view>
</template>
<style scoped lang="scss">
.parentbox {
  position: relative;
  height: 480px;

  .background img {
    display: inline-block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .introduc {
    height: 250px;
    width: 1000px;
    position: absolute;
    top: 125px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    transition: transform 0.1s ease;
  }
}

.introduc:hover {
  transform: translateX(-50%) scale(1.05);
}
</style>
