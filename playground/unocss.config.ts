import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { presetFlowbite } from '../packages/unocss-preset-flowbite/src/index'

export default defineConfig({
  theme: {
    fontFamily: {
      sans: "'Inter', sans-serif",
      mono: "'Fira Code', monospace",
    },
  },
  presets: [presetAttributify(), presetUno(), presetIcons(), presetFlowbite()],
  transformers: [transformerVariantGroup(), transformerDirectives(), transformerCompileClass()],
})
