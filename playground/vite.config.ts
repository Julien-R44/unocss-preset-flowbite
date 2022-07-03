import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from '@unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
    {
      name: 'watch-mode',

      /**
       * Monkeypatching the HMR issue
       */
      configureServer: (server) => {
        server.watcher.add(path.resolve(__dirname, '../packages/unocss-preset-flowbite/src'))
        server.watcher.on('change', () => server.restart())
      },
    },
  ],

  server: {
    watch: {
      cwd: path.resolve(__dirname, '../'),
    },
  },
})
