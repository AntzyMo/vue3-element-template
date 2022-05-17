<template>
  <div class="container">
    <div class="login-box">
      <div class="header">系统登录</div>
      <el-form label-width="0">
        <el-form-item>
          <el-input
            class="input"
            :prefix-icon="UserFilled"
            placeholder="用户名"
            clearable
          />
        </el-form-item>

        <el-form-item>
          <el-input
            placeholder="密码"
            clearable
            show-password
            :prefix-icon="Lock"
          />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { UserFilled,Lock } from '@element-plus/icons-vue'
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
      width: 750px;
      border-radius: 10px;
      box-shadow: var(--el-box-shadow-lighter);
      padding: 10px;
      .header{
        text-align: center;
        margin-bottom: 20px;
        font-size: 24px;
      }

    }
  }
</style>
