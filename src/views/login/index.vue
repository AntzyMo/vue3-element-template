<template>
  <div class="container">
    <div class="login-box">
      <div class="header">系统登录</div>
      <el-form
        ref="formRef"
        label-width="0"
        size="large"
        :rules="formRules"
        :model="form"
      >
        <div class="box">
          <el-form-item prop="username">
            <el-input
              v-model="form.username"
              class="input"
              :prefix-icon="UserFilled"
              placeholder="admin"
              clearable
            />
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              placeholder="123456"
              clearable
              show-password
              :prefix-icon="Lock"
            />
          </el-form-item>
        </div>
        <el-form-item>
          <el-button type="primary" class="w400" @click="login">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
  import { UserFilled, Lock } from '@element-plus/icons-vue'
  import { useUser } from '@/stores'
  import { useRouter } from 'vue-router'

  const formRules = {
    username: { trigger: 'blur', message: '不能为空', required: true },
    password: { trigger: 'blur', message: '不能为空', required: true },
  }

  const store = useUser()
  const router = useRouter()

  const formRef = ref()
  const form = reactive({
    username: '',
    password: '',
  })

  const login = async () => {
    await formRef.value.validate()
    await store.login(form)
    router.replace('/')
  }
</script>
<style lang="scss" scoped>
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: radial-gradient(
      circle,
      rgb(238, 174, 202) 0%,
      rgb(148, 187, 233) 100%
    );

    .login-box {
      padding: 20px 53px;
      border-radius: 10px;
      box-shadow: var(--el-box-shadow-lighter);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .header {
        text-align: center;
        margin-bottom: 20px;
        font-size: 24px;
      }
      .w400 {
        width: 400px;
      }
    }
  }
</style>
