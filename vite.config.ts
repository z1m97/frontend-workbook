import { defineConfig } from 'vite'
import { createVitePlugins } from './build/plugins'
import { pathResolve } from './build/utils'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: /~\//, replacement: `${pathResolve('src')}/` },
      { find: /#\//, replacement: `${pathResolve('typings')}/` },
    ],
  },
  plugins: createVitePlugins(),
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core'],
  },
})
