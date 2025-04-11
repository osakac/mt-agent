import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

const BORDER_RADIUS = '10px'

export const AppTheme = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        surface: {
          background: '{sky.50}',
        },
      },
    },
  },
  components: {
    button: {
      colorScheme: {
        light: {
          root: {
            borderRadius: BORDER_RADIUS,
            label: {
              fontWeight: 'bold',
            },
          },
        },
      },
    },
    inputtext: {
      colorScheme: {
        light: {
          root: {
            borderRadius: BORDER_RADIUS,
          },
        },
      },
    },
  },
})
