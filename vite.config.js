import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // ⚠️ 注意：如果你 GitHub 專案名稱不是 "2026.busan.trip"，請修改下面這行
  base: '/2026.busan.trip/', 
})