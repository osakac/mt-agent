import type { FormFieldState } from '@primevue/forms'

export interface SubmitEventForm {
  valid: boolean
  states: {
    [key: string]: FormFieldState
  }
}
