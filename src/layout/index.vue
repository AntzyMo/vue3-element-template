<script setup>
  import MenuCom from './components/menu/menu.vue'
  import MainCom from './components/main/index.vue'
  import headerCom from './components/header/index.vue'

  const collapsed = ref(false)
  const siderWidth = computed(() => (collapsed.value ? '64px' : '200px'))
</script>

<template>
  <div class="common-layout">
    <el-container class="container">
      <el-aside class="sider" :width="siderWidth">
        <MenuCom :collapsed="collapsed" />
      </el-aside>
      <el-container>
        <el-header><headerCom v-model:collapsed="collapsed" /></el-header>
        <el-main><MainCom /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
  .common-layout {
    .container {
      height: 100vh;

      .sider {
        transition: width 0.5s;
      }

      :deep(.el-header) {
        padding: 0;
      }
    }
  }
</style>
