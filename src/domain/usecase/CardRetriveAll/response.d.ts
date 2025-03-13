import type Card from "@/domain/entity/card";
import type { Pagination } from "@/domain/types/paginate";

export default interface Response {
  error?: string,
  cards?: Card[],
  pagination?: Pagination
}
