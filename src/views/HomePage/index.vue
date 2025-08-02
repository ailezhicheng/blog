<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const activeIndex = ref('1')

const handleSelect = (key: string) => {
  if (key === '1') router.push('/home/new')
  if (key === '2') router.push('/home/hot')
  if (key === '3') router.push('/home/comment')
}
</script>

<template>
  <div class="wrap">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">最新</el-menu-item>
      <el-menu-item index="2">最热</el-menu-item>
      <el-menu-item index="3">最多评论</el-menu-item>
    </el-menu>

    <RouterView></RouterView>
  </div>
</template>

<style lang="scss">
.wrap {
  width: 1000px;
  .el-menu--horizontal > .el-menu-item.is-active {
    border: none;
    color: #f7f0f7 !important;
    background-color: #09090b !important;
  }

  ::v-deep(.el-menu--horizontal > .el-menu-item:hover) {
    color: #f89800 !important;
    background-color: #e4e4e7 !important;
  }
  .el-menu--horizontal.el-menu {
    border: none;
  }

  .el-menu--horizontal > .el-menu-item {
    height: 60%;
    padding: 0 30px;
    border-radius: 20px;
    background-color: #f4f4f5;
    color: #27272a;
    border: none;
    margin: 0 15px;
  }

  // .el-menu-demo{
  //   background-color:rgba(255,255,255,0);
  // }
}
</style>
