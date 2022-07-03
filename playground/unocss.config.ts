import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { presetFlowbite } from '@julr/unocss-preset-flowbite'

export default defineConfig({
  theme: {
    colors: {
      blue: {
        50: 'red',
      },
    },
    fontFamily: {
      sans: "'Inter', sans-serif",
      mono: "'Fira Code', monospace",
    },
  },
  presets: [presetAttributify(), presetUno(), presetIcons(), presetFlowbite()],
  transformers: [transformerVariantGroup(), transformerDirectives(), transformerCompileClass()],
})
