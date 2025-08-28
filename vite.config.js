import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio0/', // Update this to match your repository name
  server: {
    port: 3000,
    open: true
  }
})
