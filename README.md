# unocss-preset-flowbite
💅 An adaptation of the [Flowbite](https://flowbite.com/) Tailwind plugin for UnoCSS

🚧 **Warning: The preset does not currently support all Flowbite features yet. Use it at your own risk. And feel free to make PRs.** 

# Installation
```
pnpm add -D @julr/unocss-preset-flowbite
```

# Usage
```ts
import { defineConfig, presetAttributify, presetUno } from 'unocss'
import { presetFlowbite } from '@julr/unocss-preset-flowbite'

export default defineConfig({
  presets: [
    presetUno(),
    presetFlowbite()
  ],
})
```
