<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
import http from '@/api/http'
import Card from '@/components/Card.vue'

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
const getData = async () => {
  await http.get('/blog').then((res) => {
    card.value = res.data.data
  })
}
onMounted(() => {
  getData()
})

onMounted(() => {
  const socket = new WebSocket('wss://nbplus507.dpdns.org') // 确保连接正确的地址

  socket.onopen = function () {
    // console.log('WebSocket connected successfully');
  }

  socket.onmessage = function (event) {
    // console.log('Received message:', event.data);
    if (event.data === 'blog_change') getData()
  }

  socket.onclose = function () {
    // console.log('WebSocket closed');
  }
})
</script>

<template>
  <div class="new-container">
    <Card v-for="value in card" :key="value.contentId" :card="value" />
  </div>
</template>

<style lang="scss" scoped>
.new-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
