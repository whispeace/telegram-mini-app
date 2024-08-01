import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv, UserConfig, UserConfigExport, UserConfigFn } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { configDefaults } from 'vitest/config'

const getBase = (mode: string) => mode === 'production' ? '/telegram-mini-app/' : '/'

export const config: UserConfigFn = ({ mode }) => {
  return {
    base: getBase(mode),
    plugins: [
      vue(),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  }
}

export default defineConfig(config)
