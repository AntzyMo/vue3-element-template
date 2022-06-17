<script setup>
  import { Expand, Fold, CaretBottom, Close } from '@element-plus/icons-vue'
  import { useUser, useTagViews } from '@/store'
  import useTag from './hooks/useTag'

  const { logout } = useUser()
  const { tagviews, closeTag } = useTag()

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
      <div
        v-for="(item, index) in tagviews"
        :key="item.path"
        class="tag"
        :class="{ active: $route.meta.title === item.title }"
        @click="$router.push(item.path)"
      >
        <span>{{ item.title }}</span>
        <Close
          v-if="index != 0"
          class="closeTag"
          @click.stop="closeTag(index)"
        />
      </div>
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
      box-shadow: 2px 2px 2px #f1f1f1;
      margin-bottom: 5px;
      padding: 9px 40px 8px 20px;
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
      display: flex;
      align-items: center;
      background: #fff;
      box-shadow: 2px 2px 2px #f1f1f1;
      padding: 3px 40px 6px 20px;

      .tag {
        border: 1px solid #d8dce5;
        color: #495060;
        background: #fff;
        cursor: pointer;
        margin-right: 8px;
        padding: 5px;
        font-size: 14px;
        text-align: center;
        display: flex;
        align-items: center;

        span {
          margin-right: 5px;
        }

        .closeTag {
          width: 12px;
          cursor: pointer;
        }
      }

      .active {
        background-color: #42b983;
        color: #fff;
      }
    }
  }
</style>
