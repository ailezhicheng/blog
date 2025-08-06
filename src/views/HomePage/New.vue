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
}
const card: Ref<Card[]> = ref([])

onMounted(() => {
  http.get('/blog').then((res) => {
    card.value = res.data.data
  })
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
