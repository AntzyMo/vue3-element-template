<script setup>
  import { Expand, Fold, CaretBottom } from '@element-plus/icons-vue'
  import { useUser } from '@/store'
  const { logout } = useUser()

  const emit = defineEmits(['update:collapsed'])

  const props = defineProps({
    collapsed: {
      type: Boolean,
      default: false
    }
  })

  // 处理侧边栏
  const handleSideBarFn = () => {
    emit('update:collapsed', !props.collapsed)
  }
</script>

<template>
  <div class="header">
    <div class="box">
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
              <el-dropdown-item @click="logout"> 退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>

    <div class="tags-box">
      <div class="tag">
        <span>仨猴爷</span>
      </div>
      <div class="tag">城市</div>
      <div class="tag">用户管理</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    position: sticky;
    top: 0;
    height: 100%;
    background: #fff;

    .box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 20px;
      padding-right: 40px;
      box-shadow: 2px 2px 2px #f1f1f1;
      margin-bottom: 5px;
      .trigger {
        font-size: 12px;
        width: 25px;
        cursor: pointer;
      }

      .fr-box {
        display: flex;
        align-items: center;
        cursor: pointer;

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

    .tags-box {
      // border-top: 1px solid #000;
      display: flex;
      align-items: center;

      background: #fff;
      box-shadow: 2px 2px 2px #f1f1f1;
      padding: 3px 40px 8px 20px;

      .tag {
        background-color: #42b983;
        color: #fff;
        margin-right: 8px;
        padding: 5px;
        font-size: 14px;
        text-align: center;
      }
    }
  }
</style>
