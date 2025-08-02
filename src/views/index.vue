<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const activeIndex = ref('1')

const handleSelect = (key: string) => {
  if (key === '1') router.push('/home')
  if (key === '2') router.push('/about')
  if (key === '3') router.push('/works')
  if (key === '4') router.push('/archive')
}
</script>

<template>
  <div class="wrap-container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" class="reset">主页</el-menu-item>
      <el-menu-item index="2" class="reset">关于</el-menu-item>
      <el-menu-item index="3" class="reset">作品集</el-menu-item>
      <el-menu-item index="4" class="reset">归档</el-menu-item>
    </el-menu>

    <RouterView></RouterView>
  </div>
</template>

<style lang="scss" scoped>
.wrap-container {
  position: relative;
  margin: 0 auto;
  top: -49px;
  width: 1000px;
  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 2px solid #f89800;
    color: #f89800 !important;
    background-color: rgba(255, 255, 255, 0) !important;
  }

  ::v-deep(.el-menu--horizontal > .el-menu-item:hover) {
    background-color: rgba(255, 255, 255, 0) !important;
    color: #f89800 !important;
  }
  .el-menu--horizontal.el-menu {
    border-bottom: none;
  }
  .el-menu--horizontal > .el-menu-item {
    height: 80%;
    padding: 0 12px;
  }

  .el-menu-demo {
    background-color: rgba(255, 255, 255, 0);
  }
}
</style>
