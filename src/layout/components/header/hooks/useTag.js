import { watch } from 'vue'
import { useTagViews } from '@/store'
import { useRoute, useRouter } from 'vue-router'

export default () => {
  const route = useRoute()
  const router = useRouter()
  const { tagviews, closeTagView, pushTagViews } = useTagViews()

  watch(
    () => route.path,
    () => {
      const { meta, path } = route
      pushTagViews({ title: meta.title, path })
    },
    { immediate: true }
  )

  // 删除标签
  const closeTag = index => {
    if (index === tagviews.length - 1) {
      const lastView = tagviews.slice(-2)[0]
      router.push(lastView.path)
    }
    closeTagView(index)
  }

  return { closeTag, tagviews }
}
