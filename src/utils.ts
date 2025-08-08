export default function formatTimeAgo(publishTime: Date | string | number): string {
  const now = new Date()

  const published = new Date(publishTime)

  if (isNaN(published.getTime())) {
    console.warn('⛔ 无效的日期输入:', publishTime)
    return '未知时间'
  }

  const diffSeconds = Math.floor((now.getTime() - published.getTime()) / 1000)

  if (diffSeconds < 0) return '刚刚'

  if (diffSeconds < 10) return '刚刚'
  if (diffSeconds < 60) return `${diffSeconds}秒前`
  if (diffSeconds < 180) return '1分钟前'
  if (diffSeconds < 300) return '3分钟前'
  if (diffSeconds < 900) return '5分钟前'
  if (diffSeconds < 1800) return '10分钟前'
  if (diffSeconds < 2700) return '20分钟前'
  if (diffSeconds < 3600) return '半小时前'
  if (diffSeconds < 7200) return '1小时前'
  if (diffSeconds < 10800) return '2小时前'
  if (diffSeconds < 21600) return '3小时前'
  if (diffSeconds < 43200) return `${Math.floor(diffSeconds / 3600)}小时前`
  if (diffSeconds < 86400) return '今天'
  if (diffSeconds < 172800) return '昨天'
  if (diffSeconds < 2592000) return `${Math.floor(diffSeconds / 86400)}天前`
  if (diffSeconds < 31536000) return `${Math.floor(diffSeconds / 2592000)}个月前`
  return `${Math.floor(diffSeconds / 31536000)}年前`
}
