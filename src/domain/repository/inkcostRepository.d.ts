import type Inkcost from "../entity/inkcost";

export default interface InkcostRepositoryInterface {
  retriveAll: () => Promise<Inkcost[] | undefined>
}
