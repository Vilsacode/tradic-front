import type CardRepository from "@/domain/repository/cardRepository"
import type { RetriveMultiple } from "@/domain/repository/cardRepository"

/*
flux d'appel
{
  filters: {
    rarity: ['communes']
  }
}
*/

/*
flux de reponse
{
  error: '',
  cards: [
    {
      name: 'hfuizoi',
      image: 'verzui.webp'
    }
  ],
  pagination: {
    page: 1,
    total: 1
  }
}
*/

const repository: CardRepository = {
  retriveAll(activeFilter): Promise<RetriveMultiple> {
    return new Promise(async (resolve) => {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          filters: activeFilter
        })
      })

      const data = await response.json()

      resolve({
        cards: data.cards,
        pagination: data.pagiantion,
        error: data.error
      })
    })
  },
}

export default repository
