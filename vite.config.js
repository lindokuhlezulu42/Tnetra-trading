import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use process.env.BASE_URL or a default
const BASE_URL = process.env.NODE_ENV === 'production' ? '/Tnetra-trading/' : '/'

export default defineConfig({
  plugins: [react()],
  base: BASE_URL, // This tells Vite to build with the correct path
})