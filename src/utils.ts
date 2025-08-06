export default function formatTimeAgo(publishTime: Date | string | number): string {
  const now = new Date()
  const published = new Date(publishTime)

  if (isNaN(published.getTime())) {
    console.warn('⛔ 无效的日期输入:', publishTime)
    return '未知时间'
  }

  const diffSeconds = Math.floor((now.getTime() - published.getTime()) / 1000)

  if (diffSeconds < 60) {
    return '刚刚'
  } else if (diffSeconds < 3600) {
    return `${Math.floor(diffSeconds / 60)}分钟前`
  } else if (diffSeconds < 86400) {
    return `${Math.floor(diffSeconds / 3600)}小时前`
  } else if (diffSeconds < 86400 * 30) {
    return `${Math.floor(diffSeconds / 86400)}天前`
  } else if (diffSeconds < 86400 * 365) {
    return `${Math.floor(diffSeconds / (86400 * 30))}个月前`
  } else {
    return `${Math.floor(diffSeconds / (86400 * 365))}年前`
  }
}
