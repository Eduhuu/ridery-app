export type Vehicle = {
  _id: string
  brand: string
  model: string
  year: number
  state: 'disponible' | 'mantenimiento'
  [key: string]: string | number
}

export type CreateVehicle = Omit<Vehicle, '_id'>

export type PaginateVehicles = {
  docs: Vehicle[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: string
  nextPage: string
}

export type VehiclegetFilter = {
  pageSize: number
  page: number
  text: string
  brand: boolean
  model: boolean
  state: boolean
  year: boolean
  yearLessThan: number
  yearGreaterThan: number
}
