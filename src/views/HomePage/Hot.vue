<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/api/http'
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
const cards = ref<Card[]>([])
onMounted(async () => {
  const res = await http.get('/blog', {
    params: {
      type: 'viewcount',
    },
  })
  //  console.log(res);
  cards.value = res.data.data
})
</script>

<template>
  <div class="wrap">
    <div class="parentbox">
      <Card v-for="value in cards" :key="value.contentId" :card="value" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  width: 1200px;
}

.parentbox {
  display: flex;
  height: 480px;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 12px;
}
@media (max-width: 768px) {
  .wrap {
    width: 100%!important;
  }
  .parentbox {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    gap: 0;
  }
}
</style>
