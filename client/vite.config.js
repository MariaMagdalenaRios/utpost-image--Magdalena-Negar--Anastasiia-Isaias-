//import { fileURLToPath, URL } from 'node:url'

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  //add this to fix the error: "Failed to resolve import "@/*" from "src/main.ts". Does the file exist?"
  server: {
  proxy: {
  '/api': 'http://localhost:4000',
  '/graphql': 'http://localhost:4000',
  },
  //finish the server configuration
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
