import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  ...(process.env.VITE_HOST ? {
    server: {
      host: process.env.VITE_HOST,
    }
  } : {}),
  plugins: [react()]
})
