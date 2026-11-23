import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages ?섏쐞 寃쎈줈(/my-portfolio-site/) 諛고룷??  base: '/my-portfolio-site/',
  plugins: [react()],
})
