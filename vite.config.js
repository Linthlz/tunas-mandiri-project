import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // <-- Menggunakan garis miring (/), bukan titik (.)

export default defineConfig({
  plugins: [react()],
  base: '/tunas-mandiri-project/', // Nama repositori Anda
})