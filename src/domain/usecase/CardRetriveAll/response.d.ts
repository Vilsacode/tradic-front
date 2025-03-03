import type Card from "@/domain/entity/card";

export default interface Response {
  error?: string,
  cards?: Card[]
}
