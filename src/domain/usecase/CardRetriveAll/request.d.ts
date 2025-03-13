import type { ActiveFilter } from '@/domain/store/filters'

export default interface Request {
  filters: ActiveFilter,
  page: number
}
