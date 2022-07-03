import type { Shortcut } from '@unocss/core'

export const alerts: Shortcut[] = [
  [
    /^alert-(.*)$/,
    ([, type]) => {
      const commonClasses = ['flex', 'items-center', 'p-4', 'mb-4', 'text-sm', 'rounded-lg']

      const additionalClasses = {
        info: 'text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800',
        danger: 'text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800',
        success: 'text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800',
        warning: 'text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800',
        dark: 'text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-300',
      }[type || 'info']

      return `${additionalClasses} ${commonClasses.join(' ')}`
    },
  ],
]
