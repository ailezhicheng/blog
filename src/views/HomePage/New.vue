<script setup lang="ts">
import Card from '@/components/Card.vue'
// interface Imgs {
//   id: number,
//   url: string
// }
// interface Card{
//   imgs:Imgs[],
//   title:string,
//   feeling:string,
//   tag:string,
//   view:number,
//   time:number,
//   publish_time:string
// }
// const cards:Card[] = [
//   {
//   imgs:[ {
//     id: 1,
//     url: 'https://images.pexels.com/photos/33098314/pexels-photo-33098314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   }],
//   title:'工作周年与AI焦虑:成长与挑战并存',
//   feeling:'Folo 与我的一年 转眼间，这份工作又快到一年了。说起来，我毕业以来，经历了两次',
//   tag:'生活笔记',
//   view:100,
//   time:1,
//   publish_time:Date.now().toString()
//   },
//    {
//   imgs:[ {
//     id: 1,
//     url: 'https://images.pexels.com/photos/33098314/pexels-photo-33098314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   }],
//   title:'工作周年与AI焦虑:成长与挑战并存',
//   feeling:'Folo 与我的一年 转眼间，这份工作又快到一年了。说起来，我毕业以来，经历了两次',
//   tag:'生活笔记',
//   view:100,
//   time:1,
//   publish_time:Date.now().toString()
//   },
//    {
//   imgs:[ {
//     id: 1,
//     url: 'https://images.pexels.com/photos/33098314/pexels-photo-33098314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   }],
//   title:'工作周年与AI焦虑:成长与挑战并存',
//   feeling:'Folo 与我的一年 转眼间，这份工作又快到一年了。说起来，我毕业以来，经历了两次',
//   tag:'生活笔记',
//   view:100,
//   time:1,
//   publish_time:Date.now().toString()
//   }, {
//   imgs:[ {
//     id: 1,
//     url: 'https://images.pexels.com/photos/33098314/pexels-photo-33098314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   }],
//   title:'工作周年与AI焦虑:成长与挑战并存',
//   feeling:'Folo 与我的一年 转眼间，这份工作又快到一年了。说起来，我毕业以来，经历了两次',
//   tag:'生活笔记',
//   view:100,
//   time:1,
//   publish_time:Date.now().toString()
//   }

// ]
</script>

<template>
  <div class="new-container">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</template>

<style lang="scss" scoped>
.new-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
