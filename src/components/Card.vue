<script setup lang="ts"></script>

<template>
  <div class="card-container">
    <div class="card-main">
      <div class="img-container">
        <img
          src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
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
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  width: 320px;
  height: 330px;
  background-color: #ffffff;
  border: 2px solid #f9f9f9;
  border-radius: 20px;
  overflow: hidden;
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
    font-weight: 500;
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

.card-main:hover {
  transform: translateY(-5px) scale(1.05);
}
</style>
