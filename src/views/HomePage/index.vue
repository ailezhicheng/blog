<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const activeIndex = ref('')
const pathMap: Record<string, string> = {
  '/home/new': '1',
  '/home/hot': '2',
  '/home/comment': '3',
}

onMounted(() => {
  const currentIndex = pathMap[route.path]
  if (currentIndex) activeIndex.value = currentIndex
})

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
      <!-- <el-menu-item index="2">最热</el-menu-item> -->
      <el-menu-item index="3">评论</el-menu-item>
    </el-menu>

    <RouterView></RouterView>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  width: 1200px;
  .el-menu--horizontal > .el-menu-item.is-active {
    border: none;
    color: #fefefe !important;
    background-color: #09090b !important;
  }

  .el-menu--horizontal > .el-menu-item:hover {
    color: black !important;
    background-color: #e4e4e7 !important;
  }
  .el-menu--horizontal.el-menu {
    border: none;
  }
  .el-menu--horizontal > .el-menu-item.is-active:hover {
    color: #fefefe !important;
    background-color: #09090b !important;
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
}
@media (max-width: 768px) {
  .wrap {
    width: 100%!important;
  }
  .el-menu--horizontal > .el-menu-item {
    padding: 0 20px!important;
    margin:0 10px!important;
  }


}
</style>
