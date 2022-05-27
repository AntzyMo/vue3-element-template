<script setup>
  import { useTheme, usePermission, useAsyncRoute } from './hooks'

  /* 权限管理 */
  const { switchVal, switchBtn } = usePermission()

  /* 颜色切换 */
  const { colorPicker, changeTheme } = useTheme()

  /* 动态路由模式切换 */
  const { radioVal, changeRadio } = useAsyncRoute()
</script>

<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>权限管理</span>
        </div>
        <div class="box">
          <span class="name">page3</span>
          <el-switch v-model="switchVal" @click="switchBtn" />
        </div>
      </template>
    </el-card>

    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>主题切换</span>
        </div>
        <div class="box">
          <div class="color-box blue" @click="changeTheme('#409EFF')" />
          <div class="color-box green" @click="changeTheme('#67C23A')" />
          <div class="color-box warn" @click="changeTheme('#E6A23C')" />
          <div class="color-box danger" @click="changeTheme('#F56C6C')" />
          <el-color-picker
            v-model="colorPicker"
            size="large"
            @change="changeTheme"
          />
        </div>
      </template>
    </el-card>

    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>动态路由模式切换</span>
        </div>
        <div class="box">
          <el-radio-group v-model="radioVal" @change="changeRadio">
            <el-radio label="1" size="large">sting集合</el-radio>
            <el-radio label="2" size="large">带参数的对象集合</el-radio>
            <el-radio label="3" size="large">前端一样的路由结构</el-radio>
          </el-radio-group>
        </div>
      </template>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
  .box-card {
    margin-bottom: 20px;

    .card-header {
      margin-bottom: 10px;
    }

    .box {
      display: flex;

      .name {
        margin-right: 10px;
      }

      .color-box {
        width: 40px;
        height: 40px;
        border-radius: 5px;
        margin-right: 20px;
        cursor: pointer;
      }

      .blue {
        background: #409eff;
      }

      .green {
        background: #67c23a;
      }

      .warn {
        background: #e6a23c;
      }

      .danger {
        background: #f56c6c;
      }
    }
  }
</style>
