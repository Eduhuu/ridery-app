import type { User, UserLoginResponse } from '@/types/user'
import { manageErrors } from '@/utils/erros'
import axios from './axios'
import { useToast } from 'vue-toastification'
import router from '@/router'
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const toast = useToast()

export const userRegister = async (body: User) => {
  axios
    .post(`${BACKEND_URL}/user`, body)
    .then(() => {
      toast.success('Se registro exitosamente.')
      router.push('/login')
    })
    .catch(err => {
      manageErrors(err, 'Ocurrio un error al crear el usuario')
    })
}

export const loginUser = async (body: User) => {
  return axios
    .post<UserLoginResponse>(`${BACKEND_URL}/user/login`, body)
    .then(res => {
      toast.success('Inicio de sesion exitoso.')
      return res
    })
    .catch(err => {
      manageErrors(err, 'Ocurrio un error en inicio de sesión.')
      return null
    })
}
