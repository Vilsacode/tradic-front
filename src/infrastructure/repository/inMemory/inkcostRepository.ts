import type Inkcost from "@/domain/entity/inkcost"
import type InkcostRepositoryInterface from "@/domain/repository/inkcostRepository"

const inkcosts: Inkcost[] = [
  {
    name: 'inkcost',
    image: '/lorcana/inkcost.svg'
  },
  {
    name: 'inkwell',
    image: '/lorcana/inkwell.svg'
  },
]

const repository: InkcostRepositoryInterface = {
  retriveAll(): Promise<Inkcost[] | undefined> {
    return new Promise((resolve) => {
      resolve(inkcosts)
    })
  },
}

export default repository
