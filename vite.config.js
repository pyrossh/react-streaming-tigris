import path from 'path';
import { telefunc } from 'telefunc/vite';
import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import eslint from 'vite-plugin-eslint';

export default {
  plugins: [react(), ssr(), telefunc(), eslint()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
    },
  }
}
