import type Encre from "../entity/encre";

export default interface EncreRepositoryInterface {
  retriveAll: () => Promise<Encre[] | undefined>
}
