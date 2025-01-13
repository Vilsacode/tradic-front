import type User from "../entity/user";

export default interface UserRepository {
  login: (login: string, password: string) => User | false
}
