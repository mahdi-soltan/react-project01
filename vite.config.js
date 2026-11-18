
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/react-project01/',
  plugins: [
    react(),
    tailwindcss()
  ],
})
