import type { AxiosError } from 'axios'
import { useToast } from 'vue-toastification'
const toast = useToast()

export const manageErrors = (
  err: AxiosError<{ message: string }>,
  defaultError: string,
) => {
  if (err.response && err.response.data && err.response.data.message) {
    toast.error(err.response.data.message)
  } else {
    toast.error(defaultError)
  }
}
