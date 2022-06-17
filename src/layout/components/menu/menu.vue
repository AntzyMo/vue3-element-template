<script setup>
  import menuItem from './menuItem.vue'
  import { useUser, useTagViews } from '@/store'
  import { watch, watchEffect } from 'vue'
  import { useRoute } from 'vue-router'
  const store = useUser()
  const tagStore = useTagViews()
  // const route = useRoute()
  // watchEffect(() => {
  //   // const { meta, path } = route
  //   // console.log(path, 'path')
  //   tagStore.pushTagViews({ title: route.meta.title, path: route.path })
  // })

  defineProps({
    collapsed: {
      type: Boolean,
      default: false
    }
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
      <img src="@/assets/logo.svg" />
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
    &:not(.el-menu--collapse) {
      width: 200px;
    }

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
