<script setup lang="ts">
import request from '@/api/http'
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
const route = useRoute()

const id = route.query.id as string

interface blogDetail {
  imgs: string[]
  title: string
  content: string
  publish_time: string
}

const details = ref<blogDetail>()
onMounted(() => {
  if (!id) return // 防止没有 ID 的情况

  request
    .get('/blog/detail', {
      params: { id },
    })
    .then((res) => {
      details.value = res.data.data
      // console.log(details.value)
    })
})
const htmlContent = computed(() => {
  return details.value ? marked(details.value.content) : ''
})
</script>

<template>
  <div class="wrap markdown-body" v-html="htmlContent" style="margin-top: 40px"></div>
</template>

<style lang="scss" scoped>
.wrap {
  font-size: 20px;
  width: 1200px;
  margin: 40px auto;
}
</style>
