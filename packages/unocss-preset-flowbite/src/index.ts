import type { Preset } from 'unocss'
import { getBaseStyle } from './base_style'
import * as shortcuts from './shortcuts'

export interface PresetFlowbiteOptions {
  /**
   * Enable shortcuts
   */
  shortcuts?: boolean
}

/**
 * Flowbite preset for UnoCSS.
 * WIP / Doesn't support all functionality yet. Use it at your own risk.
 */
export function presetFlowbite(options: PresetFlowbiteOptions = {}): Preset {
  const { shortcuts: enableShortcuts = true } = options

  return {
    name: 'unocss-preset-flowbite',
    preflights: [{ getCSS: getBaseStyle }],

    shortcuts: enableShortcuts
      ? [...shortcuts.alerts, ...shortcuts.badges, ...shortcuts.buttons]
      : [],
  }
}
