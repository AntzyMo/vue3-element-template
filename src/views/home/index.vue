<script setup>
  import { modofyRoutes, getRoutes } from '@/api/login'
  const switchVal = ref(true)
  const switchBtn = () => {
    if (switchVal.value) {
      modofyRoutes({ type: 1 })
    } else {
      modofyRoutes({ type: 0 })
    }
  }
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
  </div>
</template>

<style lang="scss" scoped>
  .box {
    .name {
      margin-right: 10px;
    }
  }
</style>
