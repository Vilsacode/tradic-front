import { reactive } from "vue";
import services from "../services";

interface StoreInterface {
  rarity?: {
    name: string;
    image: string;
  }[];
  encres?: {
    name: string;
    image: string;
  }[];
  inkcostable?: {
    name: string;
    image: string;
  }[];
}

interface ActiveFilter {
  [index: string]: string[]
}

export const store: StoreInterface = reactive({})

const activeFilter: ActiveFilter = reactive({})

export const toggleFilter = (type: string, filter: string): void => {
  debugger
  if (isActiveFilter(type, filter)) {
    const index = activeFilter[type].indexOf(filter)
    activeFilter[type].splice(index, 1)
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

services.rarityRepository.retriveAll().then(rarities => store.rarity = rarities)
services.inkcostRepository.retriveAll().then(rarities => store.inkcostable = rarities)
services.encreRepository.retriveAll().then(rarities => store.encres = rarities)
