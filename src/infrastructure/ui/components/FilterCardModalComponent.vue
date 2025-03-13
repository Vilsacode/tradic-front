<template>
  <div class="modal">
    <div class="content">
      <Close @click="emits('closeModal')" />
      <h1 class="montserrat secondary-color underline">FILTRES</h1>
      <div class="underline filter">
        <div class="filter_title montserrat">Rareté :</div>
        <div class="filter_filters">
          <img
            v-for="rarity in store.rarity"
            :key="rarity.name"
            :src="rarity.image"
            :alt="rarity.name"
            :class="isActiveFilter('rarity', rarity.name) ? 'active' : ''"
            @click="toggleFilter('rarity', rarity.name)"
          />
        </div>
      </div>
      <div class="underline filter">
        <div class="filter_title montserrat">Encres :</div>
        <div class="filter_filters">
          <img
            v-for="encre in store.encre"
            :key="encre.name"
            :src="encre.image"
            :alt="encre.name"
            :class="isActiveFilter('encre', encre.name) ? 'active' : ''"
            @click="toggleFilter('encre', encre.name)"
          />
        </div>
      </div>
      <div class="underline filter">
        <div class="filter_title montserrat">Encrable :</div>
        <div class="filter_filters">
          <img
            v-for="inkcost in store.inkcost"
            :key="inkcost.name"
            :src="inkcost.image"
            :alt="inkcost.name"
            :class="isActiveFilter('inkcost', inkcost.name) ? 'active' : ''"
            @click="toggleFilter('inkcost', inkcost.name)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Close from 'vue-material-design-icons/Close.vue'
import { store, toggleFilter, isActiveFilter } from '@/domain/store/filters'

const emits = defineEmits(['closeModal'])
</script>

<style lang="scss">
.modal {
  .content {
    width: 810px;
    height: calc(100vh - 20px);
    padding: 10px 50px;
    background-color: #161624;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    .material-design-icon.close-icon {
      align-self: end;
      color: #ff8455;
    }

    h1 {
      margin-bottom: 0;
      font-size: 64px;
    }

    .underline {
      border-bottom: 2px solid #ff8455;
      width: 100%;
      text-align: center;
    }

    .filter {
      display: grid;
      padding: 20px 0;
      grid-template-areas: 'title filters';
      grid-template-columns: 1fr 2fr;

      .filter_title {
        grid-area: title;
        display: flex;
        justify-content: start;
        align-items: center;
        font-size: 48px;
      }
      .filter_filters {
        grid-area: filters;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 50px;
          padding: 0 5px;
          padding: 10px;

          &.active {
            background-color: #4a88da;
          }
        }
      }
    }
  }
}
</style>
