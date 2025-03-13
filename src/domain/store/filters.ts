import { reactive } from "vue";
import services from "../services";

interface StoreInterface {
  [index: string]: {
    name: string;
    image: string;
  }[]
}

interface ActiveFilter {
  [index: string]: string[]
}

export const store: StoreInterface = reactive({})

export const activeFilter: ActiveFilter = reactive({})

export const getImageByTypeAndName = (type: string, name: string): string | undefined => {
  return store[type].find(item => item.name === name)?.image
}

export const toggleFilter = (type: string, filter: string): void => {
  if (isActiveFilter(type, filter)) {
    const index = activeFilter[type].indexOf(filter)
    activeFilter[type].splice(index, 1)
    if (activeFilter[type].length == 0) {
      delete activeFilter[type]
    }
    return
  }

  if (Object.keys(activeFilter).indexOf(type) == -1) {
    activeFilter[type] = []
  }

  activeFilter[type].push(filter)
}

export const isActiveFilter = (type: string, filter: string): boolean => {
  return Object.keys(activeFilter).indexOf(type) !== -1 && activeFilter[type].indexOf(filter) !== -1
}

services.rarityRepository.retriveAll().then(rarities => {
  if (rarities) {
    store.rarity = rarities
  }
})
services.inkcostRepository.retriveAll().then(inckostables => {
  if (inckostables) {
    store.inkcost = inckostables
  }
})
services.encreRepository.retriveAll().then(encres => {
  if (encres) {
    store.encre = encres
  }
})
