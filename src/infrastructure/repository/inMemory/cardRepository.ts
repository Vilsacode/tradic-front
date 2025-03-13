import type CardRepository from "@/domain/repository/cardRepository"
import type { RetriveMultiple } from "@/domain/repository/cardRepository"
import type { ActiveFilter } from "@/domain/store/filters"

const cards = [
  {
    uuid: 'vhezoipu_eva',
    image: '/lorcana/cartes/006-002.webp',
    encre: 'amber',
    inkcost: 'inkcost',
    rarity: 'super-rares'
  },
  {
    uuid: 'zeazougiuoo',
    image: '/lorcana/cartes/006-007.webp',
    encre: 'amber',
    inkcost: 'inkcost',
    rarity: 'communes'
  },
  {
    uuid: 'zeazougiuoo',
    image: '/lorcana/cartes/006-009.webp',
    encre: 'amber',
    inkcost: 'inkcost',
    rarity: 'peu-communes'
  },
  {
    uuid: 'zeazougiuoo',
    image: '/lorcana/cartes/006-016.webp',
    encre: 'amber',
    inkcost: 'inkwell',
    rarity: 'legendaires'
  },
  {
    uuid: 'zeazougiuoo',
    image: '/lorcana/cartes/006-020.webp',
    encre: 'amber',
    inkcost: 'inkwell',
    rarity: 'legendaires'
  },
  {
    uuid: 'zeazougiuoo',
    image: '/lorcana/cartes/006-056.webp',
    encre: 'amethyst',
    inkcost: 'inkcost',
    rarity: 'legendaires'
  },
  {
    uuid: 'zeazougiuoo',
    image: '/lorcana/cartes/006-089.webp',
    encre: 'emerald',
    inkcost: 'inkcost',
    rarity: 'rares'
  },
  {
    uuid: 'zeazougiuoo',
    image: '/lorcana/cartes/006-117.webp',
    encre: 'ruby',
    inkcost: 'inkcost',
    rarity: 'communes'
  },
  {
    uuid: 'zeazougiuoo',
    image: '/lorcana/cartes/006-186.webp',
    encre: 'steel',
    inkcost: 'inkcost',
    rarity: 'peu-communes'
  },
]

const filterCards = (activeFilter: ActiveFilter) => {
  return cards.filter(card => (
    (activeFilter.encre == undefined || (activeFilter.encre.length > 0 && activeFilter.encre.indexOf(card.encre) != -1)) &&
    (activeFilter.inkcost == undefined || (activeFilter.inkcost.length > 0 && activeFilter.inkcost.indexOf(card.inkcost) != -1)) &&
    (activeFilter.rarity == undefined || (activeFilter.rarity.length > 0 && activeFilter.rarity.indexOf(card.rarity) != -1))
  ))
}

const repository: CardRepository = {
  retriveAll(activeFilter): Promise<RetriveMultiple> {
    return new Promise((resolve) => {
      resolve({
        cards: filterCards(activeFilter),
        pagination: {
          current: 1,
          total: 1
        }
      })
    })
  },
}

export default repository
