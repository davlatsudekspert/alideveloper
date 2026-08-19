import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/ai': {
        target: 'https://blockrun.ai',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api\/ai/, '/api/v1/chat/completions'),
      },
    },
  },
})
