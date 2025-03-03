<template>
  <div class="cards" v-if="cards">
    <SingleCardComponent
      v-for="card in cards"
      :key="card.uuid"
      :image="card.image"
      :uuid="card.uuid"
    ></SingleCardComponent>
  </div>
</template>

<script setup lang="ts">
import SingleCardComponent from './SingleCardComponent.vue'
import usecase from '@/domain/usecase/CardRetriveAll/usecase'
import type Request from '@/domain/usecase/CardRetriveAll/request'
import type Output from '@/domain/usecase/CardRetriveAll/output'
import { ref } from 'vue'
import type Card from '@/domain/entity/card'

const cards = ref<Card[] | undefined>(undefined)
const nbCardByLine = 10

const request: Request = {
  filters: null,
}

const presenter: Output = {
  present(response) {
    cards.value = response.cards
  },
}

usecase(request, presenter)
</script>

<style lang="scss">
.cards {
  display: grid;
  grid-template-columns: repeat(v-bind('nbCardByLine'), 1fr);
}
</style>
