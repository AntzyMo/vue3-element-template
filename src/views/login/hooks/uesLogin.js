import { ref } from 'vue'
import { useUser } from '@/stores'
import { useRouter } from 'vue-router'

const formRules = {
  username: { trigger: 'blur', message: '不能为空', required: true },
  password: { trigger: 'blur', message: '不能为空', required: true },
}

export default () => {
  const store = useUser()
  const router = useRouter()

  const formRef = ref()
  const form = reactive({
    username: 'admin',
    password: '123456',
  })

  const login = async () => {
    await formRef.value.validate()
    await store.login(form)
    router.replace('/')
  }

  return {
    formRules,
    formRef,
    form,
    login,
  }
}
