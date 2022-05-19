<script setup>
  import { useRouter } from 'vue-router'
  import menuItem from './menuItem.vue'

  defineProps({
    collapsed: {
      type: Boolean,
      default: false,
    },
  })

  const {
    options: { routes },
  } = useRouter()
  const routesList = computed(() => routes)
</script>

<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="menuCom"
    default-active="2"
    text-color="#fff"
    :collapse="collapsed"
  >
    <el-menu-item class="logo">
      <img src="@/assets/logo.svg">
    </el-menu-item>

    <menuItem
      v-for="route in routesList"
      :key="route.path"
      :base-path="route.path"
      :route="route"
    />
  </el-menu>
</template>

<style lang="scss" scoped>
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
