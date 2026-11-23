import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages 하위 경로(/my-portfolio/) 배포용
  base: '/my-portfolio/',
  plugins: [react()],
})
