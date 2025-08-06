<script setup lang="ts">
import { useRouter } from 'vue-router'

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
const props = defineProps<{
  card: Card
}>()

const router = useRouter()
const handleCardClick = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  if (target.closest('.el-carousel__arrow')) {
    return
  }
  router.push({
    path: '/details',
    query: { id: props.card.contentId },
  })
}
</script>

<template>
  <div class="all-card">
    <div class="card-container" @click="handleCardClick">
      <div class="card-main">
        <div class="img-container">
          <div class="card">
            <el-carousel height="180px" arrow="always" indicator-position="none" interval="3500">
              <el-carousel-item v-for="(item, index) in card.imgs" :key="index">
                <img :src="item" alt="" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="title">{{ card.title }}</div>
        <span class="feeling" style="color: #909097">{{ card.feeling }}</span>
        <div class="tag">
          <div class="tag1">
            <div>
              <i class="iconfont icon-tag" style="font-size: 15px; color: #909097"></i>
              <span style="color: #909097">{{ card.tag }}</span>
            </div>
          </div>
          <div class="tag2">
            <i class="iconfont icon-chakan" style="font-size: 30px; color: #909097"></i>
            <span style="color: #909097">{{ card.view }}</span>
          </div>
          <div class="tag3">
            <i class="iconfont icon-shouye" style="color: #909097; padding-right: 5px"></i>
            <span style="color: #909097">{{ card.time }}</span>
            <span style="color: #909097">分钟</span>
          </div>
        </div>
        <span style="display: block; padding: 15px 20px; color: #909097">{{
          new Date(Number(card.publish_time)).toLocaleDateString()
        }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-carousel__arrow i) {
  color: black !important;
}
:deep(button.el-carousel__arrow) {
  background-color: #ffffff !important;
  height: 20px;
  width: 20px;
}
:deep(button.el-carousel__arrow--left) {
  left: 15px;
}
:deep(button.el-carousel__arrow--right) {
  right: 15px;
}

.card-link {
  display: block;
  text-decoration: none;
}
.card-container {
  width: 320px;
  height: 330px;
  background-color: #ffffff;
  border: 2px solid #f9f9f9;
  border-radius: 20px;
  overflow: hidden;
  transition: transform ease 0.3s;
  // box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  .card-main {
    transition: transform ease 0.3s;
  }

  .img-container {
    height: 180px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .title {
    font-size: 18px;
    font-weight: 700;
    color: #4f4f55;
    padding: 10px 20px;
  }
  .feeling {
    padding: 10px 20px;
  }
  .tag {
    display: flex;
    align-items: center;
    padding-top: 10px;
    .tag1 {
      padding-left: 20px;
    }
    .tag1 div {
      padding: 0 5px;
      height: 22px;
      line-height: 22px;
      background-color: #f4f4f5;
      border-radius: 10px;
      text-align: center;
    }
    .tag2 {
      padding-left: 10px;

      position: relative;
      span {
        position: relative;
        top: -5px;
      }
    }
    .tag3 {
      padding-left: 20px;
    }
  }
}
.card-container:hover {
  transform: translateY(-3px);
  box-shadow: rgb(0 0 0 / 10%) 0 10px 50px;
}
.card-main:hover {
  transform: scale(1.05);
}
</style>
