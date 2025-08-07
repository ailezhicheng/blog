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
    })
})

// const result = ref<string>('')
// onMounted(async()=>{
//   const res =  await request.post(
//   'https://api.github.com/markdown',
//   {
//     text:details.value ,
//     mode: 'gfm'
//   },
//   {
//     headers: {
//       Authorization: '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'
//     }
//   }
// )
// console.log(res);
// result.value=res.data
// })

const htmlContent = computed(() => {
  return details.value ? marked(details.value.content) : ''
})
</script>

<template>
  <div class="wrap markdown-body" v-html="htmlContent" style="margin-top: 40px"></div>
</template>

<style lang="scss" scoped>
.wrap {
  font-family: 'kaiTi';
  font-size: 20px;
  width: 1200px;
  margin: 40px auto;
}
</style>
