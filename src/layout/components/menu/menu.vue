<script setup>
  import menuItem from './menuItem.vue'
  import { useUser } from '@/stores'
  const store = useUser()

  defineProps({
    collapsed: {
      type: Boolean,
      default: false,
    },
  })
</script>

<template>
  <el-menu
    background-color="#545c64"
    class="menuCom"
    :default-active="$route.path"
    text-color="#fff"
    :collapse="collapsed"
  >
    <el-menu-item class="logo">
      <img src="@/assets/logo.svg">
    </el-menu-item>

    <menuItem
      v-for="router in store.routesList"
      :key="router.path"
      :base-path="router.path"
      :route="router"
    />
  </el-menu>
</template>

<style lang="scss" scoped>
  :deep(.el-menu-item.is-active) {
    color: var(--theme-color);
  }

  .menuCom {
    height: 100vh;
    .logo {
      height: 60px;
      display: flex;
      justify-content: center;

      img {
        width: 35px;
        height: 35px;
        margin-right: 10px;
      }
    }
  }
</style>
