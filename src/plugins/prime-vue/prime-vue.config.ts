import Aura from '@primeuix/themes/aura'

const PrimeVueConfig = {
  theme: {
    preset: Aura,
  },
  pt: {
    button: {
      root: {
        class: 'rounded-xl! text-white! text-lg! font-bold!',
      },
    },
    inputtext: {
      root: {
        class: 'rounded-xl! text-lg! text-black! bg-white! border-none! w-full! hover:bg-black/10!',
      },
    },
  },
}

export default PrimeVueConfig
