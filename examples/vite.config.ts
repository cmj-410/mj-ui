import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // optimizeDeps: {
  //   exclude: ['body-scroll-lock', '@vueuse/integrations'],
  // },
})
