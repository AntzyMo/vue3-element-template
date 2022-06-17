import { defineStore } from 'pinia'

export default defineStore({
  id: 'tagviews',
  state: () => ({
    tagviews: []
  }),

  actions: {
    pushTagViews(route) {
      const hasRoute = this.tagviews.some(item => item.path === route.path)
      if (!hasRoute) this.tagviews.push(route)
    },
    closeTagView(index) {
      this.tagviews.splice(index, 1)
    }
  }
})
