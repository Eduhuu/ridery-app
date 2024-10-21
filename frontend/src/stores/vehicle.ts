import {
  getVehicles,
  createVehicle,
  patchVehicleState,
  deleteVehicle,
} from '@/fetchers/vehicle'
import type {
  CreateVehicle,
  PaginateVehicles,
  Vehicle,
  VehiclegetFilter,
} from '@/types/vehicle'
import { defineStore } from 'pinia'

export const useVehicleStore = defineStore('vehicle', {
  state: () => ({
    vehicles: {
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
    } as PaginateVehicles,
    filter: {
      pageSize: 10,
      page: 1,
      text: '',
      brand: true,
      model: true,
      state: true,
      year: true,
      yearLessThan: new Date().getFullYear(),
      yearGreaterThan: 0,
    } as VehiclegetFilter,
  }),
  actions: {
    async getVehicles() {
      this.vehicles = await getVehicles(this.filter)
    },
    async createVehicle(body: CreateVehicle) {
      await createVehicle(body)
      await this.getVehicles()
    },
    async patchVehicle(id: string, data: Vehicle) {
      await patchVehicleState(id, data.state)
    },
    async deleteVehicle(id: string) {
      await deleteVehicle(id)
      await this.getVehicles()
    },
    async updateFilter(filter: VehiclegetFilter) {
      this.filter = filter
    },
    async updatePageFilter(page: number) {
      this.filter.page = page
      this.getVehicles()
    },
    async updatePageSize(pageSize: number) {
      this.filter.pageSize = pageSize
      this.getVehicles()
    },
  },
})
