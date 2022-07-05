# unocss-preset-flowbite
💅 An adaptation of the [Flowbite](https://flowbite.com/) Tailwind plugin for [UnoCSS](https://github.com/unocss/unocss)

🚧 **Warning: The preset does not currently support all Flowbite features yet. I just added what I needed for the moment.** 
**So use it at your own risk, and feel free to make PRs or open issues if you need more features.**

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

## License

[MIT](./LICENSE.md) License © 2022 [Julien Ripouteau](https://github.com/Julien-R44)
