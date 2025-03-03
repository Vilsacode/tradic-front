import type Card from "../entity/card";

export default interface CardRepository {
  retriveAll: () => Promise<Card[] | undefined>
}
