import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from '@unocss/vite'

const r = (p: string) => resolve(__dirname, p)

export default defineConfig({
  plugins: [vue(), Unocss()],
  resolve: {
    alias: {
      '@julr/unocss-preset-flowbite': r('../packages/unocss-preset-flowbite/src'),
    },
  },
})
