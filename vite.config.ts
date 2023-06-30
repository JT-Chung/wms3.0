import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      // dts: true,
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  server: {
    cors: true,
    open: true,
    port: 8421,
    host: '0.0.0.0',
    proxy: {
      '/http': {
        target: 'http://192.168.5.61:8088',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/http/, ''),
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: 'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
      },
    ],
  },
})
