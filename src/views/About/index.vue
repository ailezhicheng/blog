<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
interface NavList {
  id: string
  label: string
  content: string
}
const navList: NavList[] = [
  { id: 'status', label: '社会地位', content: '' },
  { id: 'personality', label: '性格属性', content: '' },
  { id: 'hobby', label: '兴趣爱好', content: '' },
  { id: 'now_status', label: '现状', content: '' },
  { id: 'name_from', label: '名字由来', content: '' },
  { id: 'experience', label: '一些经历', content: '' },
]
const activeId = ref('status')
const handleScroll = () => {
  const offsets = navList.map((item) => {
    const el = document.getElementById(item.id)
    if (!el) return { id: item.id, offset: Infinity }
    return {
      id: item.id,
      offset: Math.abs(el.getBoundingClientRect().top),
    }
  })
  offsets.sort((a, b) => a.offset - b.offset)
  activeId.value = offsets[0].id
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div style="display: flex">
    <div class="about-container">
      <div class="about-main">
        <h1 style="text-align: center; font-size: 30px; font-weight: 700">自我介绍</h1>
        <p style="padding: 20px 0; text-align: center">
          大家好。这是我为了练习自己的技术仿制的别人的博客网页!
        </p>
        <p style="text-align: center; padding: 0">
          我一定能够在不久的将来在技术方面做的更好，非常开心与你在这里相遇!
        </p>
      </div>
      <div class="about-description">
        <section :id="item.id" v-for="item in navList" :key="item.id">
          <h2>{{ item.label }}</h2>
          <p>{{ item.content }}</p>
        </section>
      </div>
    </div>
    <div class="right-elevator">
      <ul>
        <li v-for="(item, i) in navList" :key="item.id">
          <a :href="'#' + item.id" :class="{ active: activeId === item.id }">
            {{ i + 1 }}. {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="elevator">
    <div class="item1-tag"><i class="iconfont icon-icon"></i></div>
    <div class="item2-tag"><i class="iconfont icon-xihuan"></i></div>
    <div class="item3-tag"><i class="iconfont icon-pinglun"></i></div>
    <div class="item4-tag"><i class="iconfont icon-icon_fenxiang"></i></div>
  </div>
</template>

<style lang="scss" scoped>
.active {
  color: #ff9800 !important;
  font-weight: bold;
}

.about-container {
  position: relative;
  flex: 1;
}
.about-description {
  padding-top: 20px;
  h2 {
    font-weight: 700;
    font-size: 25px;
  }
  padding-left: 120px;
  padding-right: 50px;
}
.right-elevator {
  padding-top: 40px;
  ul {
    position: sticky;
    right: 10px;
    top: 10px;
    padding-top: 60px;
  }

  a {
    display: inline-block;
    color: #acacb4;
    margin-bottom: 20px;
  }
  a:hover {
    color: #ff9800;
  }
}
.elevator {
  position: fixed;
  top: 620px;
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
