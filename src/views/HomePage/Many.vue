<script setup lang="ts">
import Card from '@/components/Card.vue'
import { ref, onMounted } from 'vue'
import http from '@/api/http'
import axios from 'axios'
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
interface comment {
  contentId: string
  count: number
}

const cards = ref<Card[]>([])

const articlewithcomment = ref<comment[]>([])

onMounted(async () => {
  const res = await http.get('/blog')
  const contentIds = res.data.data.map((item: Card) => item.contentId)
  // 获取每篇文章评论数
  const fetchCommentCount = async (contentId: string) => {
    const result = await axios.get('https://chat.nbplus507.dpdns.org/api/comment?type=count', {
      params: {
        url: `/details?id=${contentId}`,
      },
    })

    // 假设 result.data 包含评论数
    const commentCount = result.data.data[0]
    // console.log(commentCount)
    // const commentCount = result.data.data[0] ?? 0;

    // 如果评论数为 0，直接返回 null（表示跳过）
    if (commentCount === 0) {
      return null
    }

    return {
      contentId,
      commentCount,
    }
  }
  const fetchAllCommentCounts = async () => {
    let results = await Promise.all(
      contentIds.map((contentId: string) => fetchCommentCount(contentId)),
    )
    // 将所有文章及其评论数按评论数排序
    results = results.filter((item) => item !== null)

    results.sort((a, b) => b.commentCount - a.commentCount)
    // 打印排序后的结果
    // console.log(results);
    return results
  }

  articlewithcomment.value = await fetchAllCommentCounts()

  const fetchArticleDetails = async (contentId: string) => {
    try {
      // 发送请求获取文章详情，假设接口为 '/api/article/details'
      const result = await http.get(`/blog/${contentId}`)
      // 假设返回的文章详细信息包含 title 和 content
      return result.data.data
    } catch (error) {
      console.error(`获取文章详情失败，contentId: ${contentId}`, error)
      return { contentId, title: null, content: null } // 返回默认值
    }
  }

  // 根据 contentId 请求所有文章的详细信息
  const fetchAllArticleDetails = async () => {
    try {
      // 使用 Promise.all 来并行请求每篇文章的详细信息

      return await Promise.all(
        articlewithcomment.value.map(async (article) => {
          return await fetchArticleDetails(article.contentId)
        }),
      )
    } catch (error) {
      console.error('获取所有文章详情失败', error)
      return []
    }
  }

  // 调用函数获取所有文章详情
  cards.value = await fetchAllArticleDetails()

  // console.log(cards.value)
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
  // margin-left: 400px;
}

.parentbox {
  display: flex;
  height: 480px;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
