import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: false,
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  css: {
    devSourcemap: true
  }
});
