import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  optimizeDeps: {
    include: ['export-to-csv'],
  },
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
  build: {
    commonjsOptions: {
      include: [/export-to-csv/],
    },
  },
  server: {
    proxy: {
      '/api': 'http://my-esp32.local',
    },
  },
})
