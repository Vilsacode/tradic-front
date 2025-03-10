import type Rarity from "@/domain/entity/rarity"
import type RarityRepositoryInterface from "@/domain/repository/rarityRepository"

const rarities: Rarity[] = [
  {
    name: 'communes',
    image: '/lorcana/rarete/Rarate-Commune-Disney-Lorcana-80x80.webp'
  },
  {
    name: 'peu-communes',
    image: '/lorcana/rarete/Cartes-peu-communes-Disney-Lorcana-74x80.webp'
  },
  {
    name: 'rares',
    image: '/lorcana/rarete/Cartes-rares-Disney-Lorcana-96x80.webp'
  },
  {
    name: 'super-rares',
    image: '/lorcana/rarete/Cartes-super-rares-Disney-Lorcana-86x80.webp'
  },
  {
    name: 'legendaires',
    image: '/lorcana/rarete/Cartes-legendaires-Disney-Lorcana-94x80.webp'
  },
  {
    name: 'enchantees',
    image: '/lorcana/rarete/cartes-enchantees-Disney-Lorcana-69x80.png'
  },
]

const repository: RarityRepositoryInterface = {
  retriveAll(): Promise<Rarity[] | undefined> {
    return new Promise((resolve) => {
      resolve(rarities)
    })
  },
}

export default repository
