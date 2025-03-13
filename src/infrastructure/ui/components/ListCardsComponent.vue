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
import { ref, watch } from 'vue'
import type Card from '@/domain/entity/card'
import { activeFilter } from '@/domain/store/filters'

const cards = ref<Card[]>([])
const nbCardByLine = 10

const request: Request = {
  filters: null,
  page: 1,
}

const presenter: Output = {
  present(response) {
    if (response.error) {
      console.error(response.error)
      return
    }

    if (response.cards) {
      cards.value.push(...response.cards)
    }
    if (response.pagination.current < response.pagination.total) {
      request.page += 1
      usecase(request, presenter)
    }
  },
}

usecase(request, presenter)

watch(activeFilter, () => {
  cards.value = []
  usecase(request, presenter)
})
</script>

<style lang="scss">
.cards {
  display: grid;
  grid-template-columns: repeat(v-bind('nbCardByLine'), 1fr);
}
</style>
