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
      root: {
        borderRadius: BORDER_RADIUS,
      },
    },
    inputtext: {
      root: {
        borderRadius: BORDER_RADIUS,
      },
    },
    card: {
      root: {
        borderRadius: BORDER_RADIUS,
      },
      body: {
        padding: '0.5rem',
      },
    },
    divider: {
      horizontal: {
        margin: '0',
      },
    },
    tag: {
      root: {
        borderRadius: BORDER_RADIUS,
        fontWeight: '500',
      },
    },
  },
})
