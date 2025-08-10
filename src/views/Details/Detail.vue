<script setup lang="ts">
import request from '@/api/http'
import { onMounted, ref, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { init, type WalineInstance, type WalineInitOptions } from '@waline/client'
import '@waline/client/style'
let destroy: (() => void) | undefined

const route = useRoute()
const id = route.query.id as string
interface blogDetail {
  imgs: string[]
  title: string
  content: string
  publish_time: string
}

const details = ref<blogDetail>()
onMounted(() => {
  if (!id) return
  request
    .get('/blog/detail', {
      params: { id },
    })
    .then((res) => {
      details.value = res.data.data
    })
})

// markdown 预览
import { MdPreview, MdCatalog } from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'
const scrollEl = document.documentElement

//comments
onMounted(async () => {
  const options: WalineInitOptions = {
    el: '#waline',
    serverURL: 'http://127.0.0.1:8360',
    lang: 'zh-CN',
    dark: 'auto',
    path: route.fullPath,
    login: 'enable',
    emoji: ['https://unpkg.com/@waline/emojis@1.2.0/weibo'],
    reaction: true,
    // requiredMeta: ['nick', 'mail'],
    comment: true, // 是否启用评论（默认启用）
    // 还有很多可选项：mail, imageUploader, search, wordLimit...
  }

  destroy = (init(options) as WalineInstance).destroy
})
onBeforeUnmount(() => {
  destroy?.()
})
</script>

<template>
  <!-- <div class="wrap markdown-body" v-html="htmlContent" style="margin-top: 40px"></div> -->
  <div class="page">
    <div class="post">
      <div class="post-content">
        <MdPreview
          editorId="preview-only"
          :modelValue="details?.content || ''"
          previewTheme="default"
          :noMermaid="false"
          :noKatex="false"
        />
      </div>
      <aside class="post-toc">
        <MdCatalog editorId="preview-only" :scrollElement="scrollEl" />
      </aside>
      <div id="waline" class="my-10" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.md-editor-preview h1),
:deep(.md-editor-preview h2),
:deep(.md-editor-preview h3) {
  border-bottom: none !important;
}
:deep(.md-editor-preview) {
  font-family: 'KaiTi', '楷体', serif !important;
}

/* 如果是 <style scoped>，要用 :deep 穿透目录内部样式 */
:deep(.md-editor-catalog) {
  max-height: calc(100vh - 120px);
  overflow: auto;
  padding: 8px 12px;
  border-radius: 8px;
}

.page {
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: 24px;
  box-sizing: border-box;
}

/* 2) 两栏：内容 + 目录（用 grid 更稳） */
.post {
  display: grid;
  grid-template-columns: 1fr 200px;
  column-gap: 32px;
  align-items: start;
  margin-left: 80px;
}
.post-toc {
  position: sticky;
  top: 80px;
}

/* 3) 让“内容列里的预览”真的居中、限宽 */
.post-content {
  min-width: 0;
  display: flex;
  justify-content: center;
}

/* ——关键覆盖：预览容器的 3 层都打到，且加 !important —— */
:deep(.md-editor-preview) {
  padding: 0 !important;
}
:deep(.md-editor-preview .md-editor-preview-wrapper) {
  max-width: 850px !important; /* 正文理想宽度（800~900 自定） */
  margin-left: auto !important;
  margin-right: auto !important;
  padding-inline: 12px !important;
  box-sizing: border-box;
}
:deep(.md-editor-preview .markdown-body) {
  max-width: 850px !important;
  margin-left: auto !important;
  margin-right: auto !important;
}

/* 小屏可选：隐藏目录 */
// @media (max-width: 1024px){
//   .post{ grid-template-columns: 1fr; }
//   .post-toc{ display: none; }
// }
</style>
