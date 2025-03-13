import type Card from "../entity/card";
import type { ActiveFilter } from "../store/filters";
import type { Pagination } from "../types/paginate";

export interface RetriveMultiple {
  error?: string
  cards: Card[]
  pagination: Pagination
}

export default interface CardRepository {
  retriveAll: (filter: ActiveFilter) => Promise<RetriveMultiple>
}
