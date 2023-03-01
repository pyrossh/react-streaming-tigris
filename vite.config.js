import path from 'path'
import { telefunc } from 'telefunc/vite'
import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'

export default {
  plugins: [react(), ssr(), telefunc()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
    },
  }
}
