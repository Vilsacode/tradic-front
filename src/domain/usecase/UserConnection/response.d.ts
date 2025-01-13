import type User from "@/domain/entity/user";

export default interface Response {
  error?: string,
  user?: User
}
