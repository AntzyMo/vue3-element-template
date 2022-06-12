import { ref } from 'vue'
import { useUser } from '@/store'

export default () => {
  const { changeAsyncRouterType } = useUser()
  const radioVal = ref('1')

  const changeRadio = val => {
    changeAsyncRouterType(val)
  }
  return {
    radioVal,
    changeRadio
  }
}
