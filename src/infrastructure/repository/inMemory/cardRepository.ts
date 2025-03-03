import type Card from "@/domain/entity/card"
import type CardRepository from "@/domain/repository/cardRepository"

const cards: Card[] = [
  {
    uuid: 'vhezoipu_eva',
    image: '/lorcana/cartes/006-002.webp'
  },
  {
    uuid: 'zeazougiuoo',
    image: '/lorcana/cartes/006-007.webp'
  },
  {
    uuid: 'zeazougiuoo',
    image: '/lorcana/cartes/006-009.webp'
  },
  {
    uuid: 'zeazougiuoo',
    image: '/lorcana/cartes/006-016.webp'
  },
  {
    uuid: 'zeazougiuoo',
    image: '/lorcana/cartes/006-020.webp'
  },
  {
    uuid: 'zeazougiuoo',
    image: '/lorcana/cartes/006-056.webp'
  },
  {
    uuid: 'zeazougiuoo',
    image: '/lorcana/cartes/006-089.webp'
  },
  {
    uuid: 'zeazougiuoo',
    image: '/lorcana/cartes/006-117.webp'
  },
  {
    uuid: 'zeazougiuoo',
    image: '/lorcana/cartes/006-186.webp'
  },
]

const repository: CardRepository = {
  retriveAll(): Promise<Card[] | undefined> {
    return new Promise((resolve) => {
      resolve(cards)
    })
  },
}

export default repository
