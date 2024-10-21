import type {
  CreateVehicle,
  PaginateVehicles,
  Vehicle,
  VehiclegetFilter,
} from '@/types/vehicle'
import axios from './axios'
import { manageErrors } from '@/utils/erros'
import { useToast } from 'vue-toastification'
const toast = useToast()
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const getVehicles = async (filter: VehiclegetFilter) => {
  return axios
    .get<PaginateVehicles>(
      `${BACKEND_URL}/vehicle?page=${filter.page}&pageSize=${filter.pageSize}&text=${filter.text}&brand=${filter.brand ? 'true' : 'false'}&model=${filter.model ? 'true' : 'false'}&state=${filter.state ? 'true' : 'false'}&year=${filter.year ? 'true' : 'false'}&yearLessThan=${filter.yearLessThan}&yearGreaterThan=${filter.yearGreaterThan}`,
    )
    .then(res => res.data)
    .catch(err => {
      manageErrors(err, 'Ocurrió un al mostrar los vehículos')
      return {
        docs: [],
        totalDocs: 0,
        limit: 10,
        totalPages: 0,
        page: 0,
        pagingCounter: 0,
        hasPrevPage: false,
        hasNextPage: false,
        prevPage: '',
        nextPage: '',
      }
    })
}

export const createVehicle = async (data: CreateVehicle) => {
  return axios
    .post<Vehicle>(`${BACKEND_URL}/vehicle`, data)
    .then(() => toast.success('Se creó exitosamente.'))
    .catch(err => manageErrors(err, 'Ocurrió un al crear el vehículo'))
}

export const patchVehicleState = async (id: string, newState: string) => {
  axios
    .patch(`${BACKEND_URL}/vehicle/${id}`, { state: newState })
    .then(() => toast.success('Se edito exitosamente.'))
    .catch(err => manageErrors(err, 'Ocurrió un al editar el vehículo'))
}

export const deleteVehicle = async (id: string) => {
  axios
    .delete(`${BACKEND_URL}/vehicle/${id}`)
    .then(() => toast.success('Se eliminó exitosamente.'))
    .catch(err => manageErrors(err, 'Ocurrió un al editar el vehículo'))
}
