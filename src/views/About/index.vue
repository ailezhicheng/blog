<script setup lang="ts"></script>

<template>
  <div class="about-container">
    <div class="about-main">
      <h1 style="text-align: center; font-size: 30px; font-weight: 700">自我介绍</h1>
      <p style="padding: 20px 0; text-align: center">
        大家好，我是喜爱学习技术的小明。这是我为了练习自己的技术仿制的别人的博客网页!
      </p>
      <p style="text-align: center; padding: 0">
        我一定能够在不久的将来在技术方面做的更好，非常开心与你在这里相遇!
      </p>
    </div>
    <div class="about-description">
      <div>
        <h2>社会地位</h2>
      </div>
      <div>
        <h2>性格属性</h2>
      </div>
      <div>
        <h2>兴趣爱好</h2>
      </div>

      <div>
        <h2>现状</h2>
      </div>
      <div>
        <h2>名字由来</h2>
      </div>
      <div>
        <h2>一些经历</h2>
      </div>
      <div>
        <h2>域名</h2>
      </div>
      <div>
        <h2>联系方式</h2>
      </div>
      <div>
        <h2>设备</h2>
      </div>
    </div>
    <div class="elevator">
      <div class="item1-tag"><i class="iconfont icon-icon"></i></div>
      <div class="item2-tag"><i class="iconfont icon-xihuan"></i></div>
      <div class="item3-tag"><i class="iconfont icon-pinglun"></i></div>
      <div class="item4-tag"><i class="iconfont icon-icon_fenxiang"></i></div>
    </div>
  </div>
</template>

<style lang="scss">
.about-container {
  position: relative;
}
.about-description {
  padding-top: 20px;
  h2 {
    font-weight: 700;
    font-size: 25px;
  }

  padding-left: 180px;
}
.elevator {
  position: fixed;
  top: 540px;
  left: 330px;
  height: 300px;
  width: 80px;
  // background-color: red;
  text-align: center;

  div {
    padding: 20px 0;
    cursor: pointer;
  }
  i {
    font-size: 33px;
  }
  .item1-tag:hover i {
    color: #f91880 !important;
  }
  .item2-tag:hover i {
    color: #facc15 !important;
  }
  .item3-tag:hover i {
    color: #22c55e !important;
  }
  .item4-tag:hover i {
    color: #0ea5e9 !important;
  }
}
</style>
