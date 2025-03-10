import type Encre from "@/domain/entity/encre"
import type EncreRepositoryInterface from "@/domain/repository/encreRepository"

const Encres: Encre[] = [
  {
    name: 'amber',
    image: '/lorcana/encres/COLOR_AMBER_RGB.png'
  },
  {
    name: 'amethyst',
    image: '/lorcana/encres/COLOR_AMETHYST_RGB.png'
  },
  {
    name: 'emerald',
    image: '/lorcana/encres/COLOR_EMERALD_RGB.png'
  },
  {
    name: 'ruby',
    image: '/lorcana/encres/COLOR_RUBY_RGB.png'
  },
  {
    name: 'sapphire',
    image: '/lorcana/encres/COLOR_SAPPHIRE_RGB.png'
  },
  {
    name: 'steel',
    image: '/lorcana/encres/COLOR_STEEL_RGB.png'
  },
]

const repository: EncreRepositoryInterface = {
  retriveAll(): Promise<Encre[] | undefined> {
    return new Promise((resolve) => {
      resolve(Encres)
    })
  },
}

export default repository
