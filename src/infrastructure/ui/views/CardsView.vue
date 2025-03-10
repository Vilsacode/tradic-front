<template>
  <main>
    <FilterCardListComponent></FilterCardListComponent>
    <LisCardsComponent></LisCardsComponent>
  </main>
</template>

<script setup lang="ts">
import LisCardsComponent from '../components/ListCardsComponent.vue'
import FilterCardListComponent from '../components/FilterCardListComponent.vue'
</script>

<style lang="scss">
main {
  background-color: #324359;
  height: calc(100vh - 81px);
}
</style>
