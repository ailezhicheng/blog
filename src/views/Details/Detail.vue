<script setup lang="ts">
import request from '@/api/http'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

onMounted(() => {
  request.get('/detail', {
    params: {
      id: route.query.id,
    },
  })
})
</script>

<template>
  <div class="wrap"></div>
</template>

<style lang="scss" scoped>
.wrap {
  width: 1200px;
  margin: 0 auto;
}
</style>
