import router from './router'
import { useUser } from './store'
import { message } from '@/hooks'

router.beforeEach(async (to, form) => {
  // const store = useUser()
  // let userInfo = store.userInfo.userName
  // if (!userInfo) {
  //   try {
  //     const res = await keepLogin()
  //     if (res?.body) {
  //       store.userInfo = res.body
  //     }
  //     return true
  //   } catch ({ msg }) {
  //     if (msg && to?.meta?.login) {
  //       message(msg)
  //     }
  //     if (to?.meta?.login) {
  //       router.push({ path: '/login', query: { redirect: form.path } })
  //       return
  //     }
  //   }
  // }
})
