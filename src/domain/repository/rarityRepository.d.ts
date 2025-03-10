import type Rarity from "../entity/rarity";

export default interface RarityRepositoryInterface {
  retriveAll: () => Promise<Rarity[] | undefined>
}
