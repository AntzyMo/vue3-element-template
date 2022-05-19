<script setup name="menuItem">
  import path from 'path-browserify'
  import menuItem from './menuItem.vue'

  defineProps({
    route: {
      type: Object,
      default: () => ({}),
    },
    basePath: {
      type: String,
      default: '',
    },
  })

  /* 拼接路由地址 */
  const resolvePath = (basePath, routePath) => {
    return basePath ? path.resolve(basePath, routePath) : routePath
  }
</script>

<template>
  <template v-if="!route.meta?.hidden">
    <template v-if="route?.children?.length">
      <!-- 只显示一行 -->
      <router-link
        v-if="route.children.length === 1"
        :to="resolvePath(basePath, route.path)"
      >
        <el-menu-item :index="resolvePath(basePath, route.path)">
          <span>{{ route.children[0].meta?.title }}</span>
        </el-menu-item>
      </router-link>

      <el-sub-menu v-else :index="resolvePath(basePath, route.path)">
        <template #title>
          <span>{{ route.meta?.title || route.children[0].meta?.title }}</span>
        </template>

        <menuItem
          v-for="child in route.children"
          :key="child.path"
          :route="child"
          :base-path="resolvePath(basePath, child.path)"
        />
      </el-sub-menu>
    </template>

    <router-link v-else :to="basePath">
      <el-menu-item :index="basePath">
        {{ route.meta?.title || route.children[0].meta?.title }}
      </el-menu-item>
    </router-link>
  </template>
</template>

<style lang="scss" scoped>
  a {
    text-decoration: none;
  }
</style>
