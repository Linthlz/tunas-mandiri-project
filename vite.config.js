import { defineConfig } from 'vite'
import react from '@vitejs.plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/tunas-mandiri-project/', // Nama repositori Anda
})
