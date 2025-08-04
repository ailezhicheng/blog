<script setup lang="ts">
interface Imgs {
  id: number
  url: string
}
const imgs: Imgs[] = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/33098314/pexels-photo-33098314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/33145846/pexels-photo-33145846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/32523950/pexels-photo-32523950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
]
</script>

<template>
  <div class="all-card">
    <div class="card-container">
      <router-link :to="{ path: '/details', query: { id: 123 } }" class="card-link">
        <div class="card-main">
          <div class="img-container">
            <div class="card">
              <el-carousel height="180px" arrow="none" indicator-position="none">
                <el-carousel-item v-for="item in imgs" :key="item.id">
                  <img :src="item.url" alt="" />
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <div class="title">镜头与代码的交响：打造个人线上画廊与假期随笔</div>
          <span class="feeling" style="color: #909097">这些天，日子很短。却过得很有意义。</span>
          <div class="tag">
            <div class="tag1">
              <div>
                <i class="iconfont icon-tag" style="font-size: 15px; color: #909097"></i>
                <span style="color: #909097">生活笔记</span>
              </div>
            </div>
            <div class="tag2">
              <i class="iconfont icon-chakan" style="font-size: 30px; color: #909097"></i>
              <span style="color: #909097">235</span>
            </div>
            <div class="tag3">
              <i class="iconfont icon-shouye" style="color: #909097; padding-right: 5px"></i>
              <span style="color: #909097">1</span>
              <span style="color: #909097">分钟</span>
            </div>
          </div>
          <span style="display: block; padding: 15px 20px; color: #909097">2个月前</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);

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
  transform: translateZ(10px);
}
.card-main:hover {
  transform: scale(1.05);
}
</style>
