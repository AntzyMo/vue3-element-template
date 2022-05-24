import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/* 自动引用组件 和 按需加载element plus组件库 */
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

/* 生成依赖图 */
import { visualizer } from 'rollup-plugin-visualizer'

/* 自定义html模板 */
import { createHtmlPlugin } from 'vite-plugin-html'

/* cdn */
import importToCDN from 'vite-plugin-cdn-import'

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
  /* 可以删除 只是用来配置git pages */
  base: command === 'build' ? '/vue3-element-template/' : '',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      /* 注册全局引用 */
      imports: ['vue'],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),

    createVisualizer(command),

    createHtmlPlugin({
      inject: {
        data: {
          title: 'vue3-element-template',
        },
      },
    }),

    importToCDN({
      modules: [
        {
          name: 'mockjs',
          var: 'Mock',
          path: `https://cdnjs.cloudflare.com/ajax/libs/Mock.js/1.0.0/mock-min.js`,
        },
      ],
    }),
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

  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
      external: ['mockjs'],
    },
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
}))
