<script setup></script>

<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive :include="[]">
      <component :is="Component" :key="route.path" />
    </keep-alive>
  </router-view>
</template>

<style lang="scss" scoped></style>
