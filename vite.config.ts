import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    resolve: {
      alias: [
        { find: '@', replacement: resolve(__dirname, 'src') },
        { find: /^~/, replacement: '' }
      ],
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs', '.json']
    },

    /**
     * 环境变量代理
     */
    server: {
      proxy: {
        '/dev': {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/device-api/, '')
        },
        '/pro': {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/product-api/, '')
        }
      }
    },

    plugins: [react()]
  }
})
