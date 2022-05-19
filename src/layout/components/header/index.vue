<script setup>
  import { Expand, Fold, CaretBottom } from '@element-plus/icons-vue'

  const emit = defineEmits(['update:collapsed'])

  const props = defineProps({
    collapsed: {
      type: Boolean,
      default: false,
    },
  })

  // 处理侧边栏
  const handleSideBarFn = () => {
    emit('update:collapsed', !props.collapsed)
  }

  const logout = () => {
    // this.$store.dispatch('user/logout')
  }
</script>

<template>
  <div class="header">
    <!-- 左边 -->
    <div class="fl-box">
      <Expand v-if="collapsed" class="trigger" @click="handleSideBarFn" />
      <Fold v-else class="trigger" @click="handleSideBarFn" />
    </div>

    <!-- 右边 -->
    <div class="fr-box">
      <el-dropdown trigger="click">
        <div class="userInfo">
          <div class="img-box">
            <el-avatar
              shape="circle"
              :size="24"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            />
          </div>
          <div>cscsc</div>
        </div>
        <CaretBottom class="CaretBottom" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    position: sticky;
    top: 0;
    padding-left: 20px;
    padding-right: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    box-shadow: 2px 2px 2px #f1f1f1;
    cursor: pointer;
    .trigger {
      font-size: 12px;
      width: 25px;
      cursor: pointer;
    }

    .fr-box {
      display: flex;
      align-items: center;
      :deep(.el-tooltip__trigger) {
        display: flex;
        align-items: center;
      }
      .userInfo {
        display: flex;
        align-items: center;
        position: relative;
        margin-right: 5px;

        .img-box {
          margin-right: 6px;
          :deep(.el-avatar) {
            img {
              width: 100%;
            }
          }
        }
      }

      .CaretBottom {
        width: 10px;
        height: 10px;
      }
    }
  }
</style>
