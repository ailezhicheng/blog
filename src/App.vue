<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref, onMounted, onBeforeUnmount } from 'vue'
const showBox = ref(false)
const triggerRef = ref<HTMLElement | null>(null)
const boxRef = ref<HTMLElement | null>(null)

const toggleBox = (): void => {
  showBox.value = !showBox.value
}

// 监听点击外部，隐藏弹出框
const handleClickOutside = (event: MouseEvent): void => {
  const trigger = triggerRef.value
  const box = boxRef.value

  // 目标元素
  const target = event.target as Node | null

  if (trigger && box && target && !trigger.contains(target) && !box.contains(target)) {
    showBox.value = false
  }
}
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

// 搜索
const showSearch = ref(false)
const keyword = ref('')

const openSearch = () => {
  showSearch.value = true
  document.body.style.overflow = 'hidden' // 禁止背景滚动
}

const closeSearch = () => {
  showSearch.value = false
  document.body.style.overflow = '' // 恢复滚动
}

// esc 键关闭
const handleKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeSearch()
}

onMounted(() => {
  window.addEventListener('keydown', handleKey)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKey)
})
const handleEnter = () => {
  closeSearch()

  router.push({
    path: '/search',
    query: {
      key: keyword.value,
    },
  })
}
</script>
<template>
  <div class="container">
    <a href="https://blog.skysblue.dpdns.org/" target="_blank"
      ><i class="iconfont icon-houtaiguanli-quanxianguanli blog-admin"></i
    ></a>
    <div class="parentbox">
      <div class="background">
        <img
          src="https://images.pexels.com/photos/12152333/pexels-photo-12152333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <!-- <img src="./assets/img/background.webp" alt="" /> -->

        <!-- <video autoplay muted>
        <source src="https://videos.pexels.com/video-files/27439386/12144625_1080_1920_30fps.mp4" type="video/mp4" />
  您的浏览器不支持 video 标签。
</video> -->
      </div>
      <div class="introduc">
        <div class="main-container">
          <div class="left-profile">
            <img class="profile" src="./assets/img/profile.jpg" alt="" style="border-radius: 50%" />
          </div>
          <div class="middle">
            <div class="title"><span>爱乐之城</span></div>
            <div class="description" style="font-size: 18px">
              <span>写代码是因为爱，写到世界充满爱！</span>
            </div>
            <div class="_info">
              <div class="follower">
                <span>0</span>
                <span style="color: #71717a; font-size: 17px"> 关注者</span>
              </div>

              <div class="isfollowing">
                <span>0</span>
                <span style="color: #71717a; font-size: 17px"> 正在关注</span>
              </div>

              <div class="sponsor">
                <span class="iconfont icon-12345" style="margin-right: 0; color: #f87171"></span>
                <span style="color: #71717a; font-size: 17px; margin-left: 5px">赞助 </span>
              </div>
            </div>

            <div class="social-link">
              <a href="https://github.com/ailezhicheng" target="_blank" style="color: black">
                <i class="iconfont icon-github" style="margin-left: 13px"></i
              ></a>
              <i class="iconfont icon-telegram"></i>
              <i class="iconfont icon-tuite"></i>
            </div>
          </div>
          <div class="right">
            <div class="right-top right-top1" ref="triggerRef" @click="toggleBox">
              <span class="iconfont icon-3dian"></span>

              <div class="dian-box" v-show="showBox" ref="boxRef">
                <ul>
                  <li>
                    <a href="#"
                      ><i class="iconfont icon-xiaohongshu" style="color: #f87171"></i
                      ><span>在 RedBook 上查看</span></a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="iconfont icon-shou_instagram" style="color: #fe0361"></i
                      ><span>在 Instagram 上查看</span></a
                    >
                  </li>
                  <li>
                    <a href="https://www.douyin.com/user/self?from_tab_name=main"
                      ><i class="iconfont icon-tiktok"></i><span>在 Tiktok 上查看</span></a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="iconfont icon-weibo" style="color: #e6172d; font-size: 16px"></i
                      ><span>在 Weibo 上查看</span></a
                    >
                  </li>
                  <li>
                    <a href="https://space.bilibili.com/502093016?spm_id_from=333.788.0.0"
                      ><i
                        class="iconfont icon-Bzhan1"
                        style="color: #f98ea2; font-size: 20px; margin-left: 8px"
                      ></i
                      ><span>在 B站 上查看</span></a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="iconfont icon-dingyue"></i>
                      <span>订阅</span>
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      ><i class="iconfont icon-sousuo" style="color: #ed873a"></i>
                      <span>在本站中搜索</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div></div>
            <div class="right-top right-top2">
              <span class="iconfont icon-dingyue" style="color: #ee832f"></span>
              <div class="drop_menu">
                <span style="font-size: 18px; padding-left: 10px">订阅RSS</span>
              </div>
            </div>
            <div class="right-top right-top3" @click="openSearch">
              <span class="iconfont icon-sousuo"></span>
              <div class="sousuo">
                <span style="font-size: 18px; padding-left: 0px">在本站搜索</span>
              </div>
            </div>
            <div class="right-top4">
              <span class="iconfont icon-profilefill" style="color: #faf9fa; font-size: 15"></span
              ><span style="color: #faf9fa">关注</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="content-sousuo">
      <!-- 遮罩层 + 弹窗 -->
      <transition name="fade">
        <div v-if="showSearch" class="overlay" @click.self="closeSearch">
          <div class="search-box">
            <span class="iconfont icon-sousuo"></span>
            <input
              type="text"
              placeholder="关键词"
              v-model="keyword"
              autofocus
              @keydown.enter="handleEnter"
            />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<style scoped lang="scss">
.blog-admin {
  position: absolute;
  top: 200px;
  right: 430px;
  font-size: 30px;
  color: #fa9c14;
  z-index: 1000000;
}
.content-sousuo {
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    // backdrop-filter: blur(1px); /* 背景模糊 */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }

  /* 搜索框容器 */
  .search-box {
    position: relative;
    background: white;
    border-radius: 10px;
    padding: 0.5rem 2rem;
    min-width: 350px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    span {
      position: absolute;
      font-size: 20px;
      top: 17px;
      left: 35px;
    }
  }

  .search-box input {
    width: 80%;
    padding: 0.6rem 2rem;
    font-size: 16px;
    border: none;
    outline: none;
    border-radius: 6px;
    background: white;
    &::placeholder {
      font-family: 'KaiTi';
      font-size: 18px;
    }
  }

  /* 过渡动画 */
  // .fade-enter-active,
  // .fade-leave-active {
  //   transition: all 0.3s ease;
  // }
  // .fade-enter-from,
  // .fade-leave-to {
  //   opacity: 0;
  //   transform: scale(0.95);
  // }
}
.social-link {
  margin-top: 10px;
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
  .left-profile img {
    height: 150px;
    width: 150px;
    margin: 20px 10px;
  }
  position: relative;
  height: 480px;
  .right {
    display: flex;
    position: absolute;
    top: 20px;
    right: 40px;
    .right-top {
      padding: 0 18px;
      height: 35px;
      line-height: 35px;
      border-radius: 20px;
    }

    .right-top1 {
      position: relative;

      .dian-box {
        left: 0;
        top: 38px;
        position: absolute;
        // width: 10%px;
        width: 230px;
        z-index: 1000;
        ul {
          background-color: #ffffff;
          border-radius: 10px;
          border: 1px solid white;
          padding: 10px 0px;
          box-shadow: 0 0px 18px rgba(0, 0, 0, 0.3);
          li:hover {
            background-color: #ece5ec;
          }
          li {
            height: 35px;
            line-height: 35px;
            font-family: 'KaiTi';
            a {
              display: inline-block;
              width: 100%;
            }
            a span {
              font-size: 16px;
              color: #5a6270;
            }
            a .iconfont {
              margin: 0 10px;
            }
          }
        }
      }
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
    .right-top3 {
      position: relative;
      .sousuo {
        position: absolute;
        top: 45px;
        width: 100px;
        left: -25px;
        background-color: #52525b;
        border-radius: 10px;
        height: 35px;
        line-height: 35px;
        color: white;
        text-align: center;
        display: none;
      }
      &:hover .sousuo {
        display: block;
      }

      &:hover {
        background-color: #ece5ec;
      }
    }

    .right-top4 {
      margin-top: -5px;
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
        margin: 30px 30px;
        margin-bottom: 20px;
        font-size: 30px;
        font-family: '楷体', 'KaiTi', 'STKaiti', serif;
        font-weight: 700;
      }
      .description {
        font-size: 18px;
        margin-bottom: 10px;
        margin-left: 20px;
      }

      ._info {
        display: flex;
        margin: 10px 20px;
        margin-bottom: 20px;
        .follower {
          display: inline-block;
          margin-left: -13px;
          height: 35px;
          line-height: 35px;
          padding: 0 15px;
          border-radius: 19px;
        }
        .follower:hover {
          background-color: #ece5ec;
        }
        .isfollowing {
          display: inline-block;
          height: 35px;
          line-height: 35px;
          padding: 0 15px;
          border-radius: 19px;
          margin-right: 20px;
        }
        .isfollowing:hover {
          background-color: #ece5ec;
        }
        .sponsor {
          display: inline-block;
          height: 35px;
          line-height: 35px;
          padding: 0 20px;
          border-radius: 19px;
        }
        .sponsor:hover {
          background-color: #ece5ec;
        }
      }
    }
  }
}

.introduc:hover {
  transform: translateX(-50%) scale(1.01);
}

// @media (max-width: 767px) {
//   .content-sousuo {
//     .overlay {
//       position: fixed;
//       inset: 0;
//       background: rgba(0, 0, 0, 0.4);
//       // backdrop-filter: blur(1px); /* 背景模糊 */
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       z-index: 9999;
//     }

//     /* 搜索框容器 */
//     .search-box {
//       position: relative;
//       background: white;
//       border-radius: 10px;
//       padding: 0.5rem 2rem;
//       min-width: 350px;
//       box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
//       span {
//         position: absolute;
//         font-size: 20px;
//         top: 17px;
//         left: 35px;
//       }
//     }

//     .search-box input {
//       width: 80%;
//       padding: 0.6rem 2rem;
//       font-size: 16px;
//       border: none;
//       outline: none;
//       border-radius: 6px;
//       background: white;
//       &::placeholder {
//         font-family: 'KaiTi';
//         font-size: 18px;
//       }
//     }

//     /* 过渡动画 */
//     .fade-enter-active,
//     .fade-leave-active {
//       transition: all 0.3s ease;
//     }
//     .fade-enter-from,
//     .fade-leave-to {
//       opacity: 0;
//       transform: scale(0.95);
//     }
//   }
//   .social-link {
//     margin-top: 20px;
//     i.iconfont {
//       font-size: 20px;
//       margin-right: 15px;
//       display: inline-block;
//     }
//     i.icon-github {
//       transition: transform 0.3s ease;
//       font-size: 25px;
//     }
//     i.icon-github:hover {
//       cursor: pointer;
//       transform: scale(1.1);
//     }
//     i.icon-telegram {
//       transition: transform 0.3s ease;
//       color: #26a5e4;
//     }
//     i.icon-telegram:hover {
//       cursor: pointer;
//       transform: scale(1.1);
//     }
//     i.icon-tuite {
//       transition: transform 0.3s ease;
//     }
//     i.icon-tuite:hover {
//       cursor: pointer;
//       transform: scale(1.1);
//     }
//   }
//   .left-profile img.profile {
//     display: inline-block;
//     height: 100px;
//     width: 100px;
//     margin-top: 50px !important;
//   }

//   .parentbox {
//     position: relative;
//     height: 280px;
//     .right {
//       display: flex;
//       position: absolute !important;
//       top: 180px;
//       // top: 20px;
//       // right: 40px;
//       .right-top {
//         //
//         padding: 0 10px;
//         height: 20px;
//         line-height: 20px;
//         border-radius: 20px;
//       }

//       .right-top1 {
//         position: relative;

//         .dian-box {
//           left: 0;
//           top: 38px;
//           position: absolute;
//           // width: 10%px;
//           width: 230px;

//           ul {
//             position: absolute;
//             z-index: 10000000;
//             background-color: #ffffff;
//             border-radius: 10px;
//             border: 1px solid white;
//             padding: 10px 0px;
//             box-shadow: 0 0px 18px rgba(0, 0, 0, 0.3);
//             li:hover {
//               background-color: #ece5ec;
//             }
//             li {
//               height: 35px;
//               line-height: 35px;
//               font-family: 'KaiTi';
//               a {
//                 display: inline-block;
//                 width: 100%;
//               }
//               a span {
//                 font-size: 16px;
//                 color: #5a6270;
//               }
//               a .iconfont {
//                 margin: 0 10px;
//               }
//             }
//           }
//         }
//       }

//       .right-top2 {
//         position: relative;
//       }
//       .right-top2 .drop_menu {
//         position: absolute;
//         top: 40px;
//         left: -25px;
//         border-radius: 10px;
//         height: 35px;
//         width: 90px;
//         background-color: #52525b;
//         color: white;
//         display: none;
//       }
//       .right-top1:hover {
//         background-color: #ece5ec;
//       }

//       .right-top2:hover {
//         background-color: #ece5ec;
//       }
//       .right-top2:hover .drop_menu {
//         display: block;
//       }
//       .right-top3 {
//         position: relative;
//         .sousuo {
//           position: absolute;
//           top: 45px;
//           width: 100px;
//           left: -25px;
//           background-color: #52525b;
//           border-radius: 10px;
//           height: 35px;
//           line-height: 35px;
//           color: white;
//           text-align: center;
//           display: none;
//         }
//         &:hover .sousuo {
//           display: block;
//         }

//         &:hover {
//           background-color: #ece5ec;
//         }
//       }

//       .right-top4 {
//         // position: absolute;
//         border-radius: 20px;
//         background-color: #fa9c14;
//         height: 30px;
//         line-height: 30px;
//         padding: 0px 20px;
//         cursor: pointer;
//       }
//       div {
//         margin: 0 8px;
//         span {
//           font-size: 20px;
//         }
//       }
//     }

//     .background img {
//       display: inline-block;
//       height: 100%;
//       width: 100%;
//       object-fit: cover;
//       position: absolute;
//       top: 0;
//       left: 0;
//       right: 0;
//     }
//     .introduc {
//       height: 220px;
//       width: 100%;
//       position: absolute;
//       top: 10px;
//       // left: 50%;
//       // transform: translateX(-50%);
//       background-color: rgba(255, 255, 255, 0.5);
//       backdrop-filter: blur(1px);
//       border-radius: 10px;
//       transition: transform 0.1s ease;
//       .main-container {
//         display: flex;
//         .title {
//           margin: 15px 10px;
//           margin-bottom: 20px;
//           font-size: 25px;
//           font-family: '楷体', 'KaiTi', 'STKaiti', serif;
//           font-weight: 700;
//         }
//         .description {
//           font-size: 15px !important;
//           margin-bottom: 15px;
//           margin-left: 8px;
//         }

//         ._info {
//           display: flex;
//           margin: 10px 10px;
//           margin-bottom: 10px;
//           .follower {
//             // span{font-size: 10px !important;}
//             display: inline-block;
//             margin-left: -13px;
//             height: 30px;
//             line-height: 30px;
//             padding: 0 10px;
//             border-radius: 19px;
//           }
//           .follower:hover {
//             background-color: #ece5ec;
//           }
//           .isfollowing {
//             display: inline-block;
//             height: 30px;
//             line-height: 30px;
//             padding: 0 10px;
//             border-radius: 19px;
//             margin-right: 20px;
//           }
//           .isfollowing:hover {
//             background-color: #ece5ec;
//           }
//           .sponsor {
//             display: inline-block;
//             height: 30px;
//             line-height: 30px;
//             padding: 0 10px;
//             border-radius: 19px;
//           }
//           .sponsor:hover {
//             background-color: #ece5ec;
//           }
//         }
//       }
//     }
//   }
// }
</style>
