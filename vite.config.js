import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/* 自动引用组件 和 按需加载element plus组件库 */
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { viteMockServe } from 'vite-plugin-mock'

/* 生成依赖图 */
import { visualizer } from 'rollup-plugin-visualizer'

/* 生成打包分析包 */
const createVisualizer = (command) => {
  if (command === 'build') {
    return visualizer({
      filename: 'visualizer.html',
      open: true,
      brotliSize: true,
    })
  }
}

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/vue3-element-template/' : '',
  plugins: [
    vue(),
    viteMockServe({ mockPath: 'mock', supportTs: false }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      /* 注册全局引用 */
      imports: ['vue'],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),

    createVisualizer(command),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  // server: {
  //   host: true,
  //   proxy: {
  //     "/api": {
  //       // target:'https://test.jobcn.com', // 测试
  //       target:'/mock', // 测试
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
}))
