<script setup lang="ts"></script>
<template>
  <div class="parentbox">
    <div class="background">
      <img src="./assets/img/background.webp" alt="" />
    </div>
    <div class="introduc">
      <div class="main-container">
        <div class="left-profile">
          <img
            src="./assets/img/profile.jpg"
            alt=""
            style="height: 150px; width: 150px; border-radius: 50%; margin: 30px 10px"
          />
        </div>
        <div class="middle">
          <div class="title"><span>爱乐之城</span></div>
          <div class="description"><span>写代码是因为爱，写到世界充满爱！</span></div>
          <div class="_info">
            <span class="follower">0 关注者</span>
            <span class="isfollowing">100 正在关注</span>

            <span class="iconfont icon-12345" style="margin-right: 0; color: #f87171"></span>
            <span class="sponsor" style="margin-left: 5px">赞助 </span>
          </div>

          <div class="social-link">
            <i class="iconfont icon-github" style="margin-left: 13px"></i>
            <i class="iconfont icon-telegram"></i>
            <i class="iconfont icon-tuite"></i>
          </div>
        </div>
        <div class="right">
          <div class="right-top right-top1"><span class="iconfont icon-3dian"></span></div>
          <div class="right-top right-top2">
            <span class="iconfont icon-dingyue" style="color: #ee832f"></span>
            <div class="drop_menu">
              <span style="font-size: 18px; padding-left: 10px">订阅RSS</span>
            </div>
          </div>
          <div class="right-top right-top3"><span class="iconfont icon-sousuo"></span></div>
          <div class="right-top4">
            <span class="iconfont icon-profilefill" style="color: #faf9fa; font-size: 15"></span
            ><span style="color: #faf9fa">关注</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>
<style scoped lang="scss">
.social-link {
  margin-top: 25px;
  i.iconfont {
    font-size: 25px;
    margin-right: 20px;
    display: inline-block;
  }
  i.icon-github {
    transition: transform 0.3s ease;
    font-size: 28px;
  }
  i.icon-github:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  i.icon-telegram {
    transition: transform 0.3s ease;
    color: #26a5e4;
  }
  i.icon-telegram:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  i.icon-tuite {
    transition: transform 0.3s ease;
  }
  i.icon-tuite:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
}
.parentbox {
  position: relative;
  height: 480px;
  .right {
    display: flex;
    position: absolute;
    top: 30px;
    right: 40px;
    .right-top {
      padding: 0 18px;
      height: 35px;
      line-height: 35px;
      border-radius: 20px;
    }

    .right-top2 {
      position: relative;
    }
    .right-top2 .drop_menu {
      position: absolute;
      top: 40px;
      left: -25px;
      border-radius: 10px;
      height: 35px;
      width: 90px;
      background-color: #52525b;
      color: white;
      display: none;
    }
    .right-top1:hover {
      background-color: #ece5ec;
    }
    .right-top2:hover {
      background-color: #ece5ec;
    }
    .right-top2:hover .drop_menu {
      display: block;
    }
    .right-top3:hover {
      background-color: #ece5ec;
    }
    .right-top4 {
      border-radius: 20px;
      background-color: #fa9c14;
      height: 35px;
      line-height: 35px;
      padding: 0 20px;
      cursor: pointer;
    }
    div {
      margin: 0 8px;
      span {
        font-size: 20px;
      }
    }
  }

  .background img {
    display: inline-block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .introduc {
    height: 220px;
    width: 1000px;
    position: absolute;
    top: 125px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(1px);
    border-radius: 10px;
    transition: transform 0.1s ease;
    .main-container {
      display: flex;
      .title {
        margin: 40px 30px;
        margin-bottom: 20px;
        font-size: 30px;
        font-family: '楷体', 'KaiTi', 'STKaiti', serif;
        font-weight: 700;
      }
      .description {
        font-size: 14px;
        margin-bottom: 20px;
        margin-left: 20px;
      }

      ._info {
        margin: 20px 20px;
        margin-bottom: 20px;
        span {
          margin: 0 20px;
        }
        .follower {
          margin-left: 0;
        }
      }
    }
  }
}

.introduc:hover {
  transform: translateX(-50%) scale(1.01);
}
</style>
