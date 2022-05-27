import { ref } from 'vue'
import { modofyRoutes } from '@/api/login'

export default () => {
  const switchVal = ref(true)
  const switchBtn = () => modofyRoutes({ type: switchVal.value * 1 })
  return {
    switchVal,
    switchBtn,
  }
}
