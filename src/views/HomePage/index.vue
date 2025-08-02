<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const activeIndex = ref<string>('1')
const handleSelect = (key: string) => {
  if (key === '1') router.push('/new')
  if (key === '2') router.push('/hot')
  if (key === '3') router.push('/comment')
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
}
</style>
