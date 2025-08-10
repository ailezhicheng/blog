<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { Ref } from 'vue'
import { ref, watch } from 'vue'
import http from '@/api/http'
import Card from '@/components/Card.vue'
const route = useRoute()
interface Card {
  imgs: string[]
  title: string
  feeling: string
  tag: string
  view: number
  time: number
  contentId: string
  publish_time: string
  _id: string
}
const card: Ref<Card[]> = ref([])

// const getData = async() =>{
//   const key = route.query.key;  // 从路由查询参数获取关键字
//       if (key) {
//         try {
//           // console.log("Keyword:", key);
//           const response = await http.get(`/blog/search?key=${key}`);
//           console.log(response.data);
//           card.value=response.data.data
//         } catch (error) {
//           console.error('搜索失败:', error);
//         }
//       } else {
//         console.warn('没有提供搜索关键字');
//       }
// }
// onMounted(() => {
//    getData()
//     });

//  watch(
//   () => route.query.key,                     // 千万别提前解构 query
//    (newValue, oldValue) => {
//     console.log('key changed:', oldValue, '->', newValue);
//      getData()
//   }
// );

const normalizeKey = (k: unknown) => {
  const v = Array.isArray(k) ? k[0] : k
  return (v ?? '').toString().trim()
}

const getData = async () => {
  const raw = route.query.key
  const key = normalizeKey(raw)
  if (!key) {
    card.value = []
    return
  }

  try {
    const { data } = await http.get(`/blog/search?key=${encodeURIComponent(key)}`)
    card.value = data.data
  } catch (e) {
    console.error('搜索失败:', e)
  }
}

// 用 watch 统一处理：进入页面也查一次
watch(
  () => route.query.key,
  () => {
    card.value = []
    getData()
  },
)
</script>

<template>
  <div class="wrap">
    <h1 style="margin-top: 20px; font-size: 20px">找到({{ card.length }})条结果</h1>
    <div class="parentbox">
      <Card v-for="value in card" :key="value.contentId" :card="value" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  width: 1200px;
  margin-left: 400px;
}

.parentbox {
  display: flex;
  height: 480px;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
