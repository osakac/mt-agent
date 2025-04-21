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
    avatar: {
      xl: {
        width: '5rem',
        height: '5rem',
      },
    },
    drawer: {
      header: {
        padding: '0',
      },
      content: {
        padding: '0.5rem 1.3rem 1rem',
      },
    },
    multiselect: {
      root: {
        borderRadius: BORDER_RADIUS,
      },
    },
  },
})
