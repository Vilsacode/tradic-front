<template>
  <div class="filters">
    <div class="actives montserrat">
      <div class="active-filter" v-for="(filter, key) in activeFilter" :key="key">
        <span>{{ key }} :</span>
        <span v-for="item in filter" :key="item"
          ><img :src="getImageByTypeAndName(key, item)"
        /></span>
      </div>
    </div>
    <div class="actions">
      <TuneVariantIcon :size="48" @click="toggleModalFilter" />
    </div>
  </div>
  <FilterCardModalComponent v-if="openModalFilter" v-on:close-modal="toggleModalFilter" />
</template>

<script setup lang="ts">
import TuneVariantIcon from 'vue-material-design-icons/TuneVariant.vue'
import FilterCardModalComponent from './FilterCardModalComponent.vue'
import { ref } from 'vue'
import { activeFilter, getImageByTypeAndName } from '@/domain/store/filters'

const toggleModalFilter = () => {
  openModalFilter.value = !openModalFilter.value
}

const openModalFilter = ref(false)
</script>

<style lang="scss">
.filters {
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  .actives {
    display: flex;
    align-items: center;
    font-size: 32px;

    .active-filter {
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 4px solid;
      padding: 0 10px;

      &:last-of-type {
        border-right: 0;
      }

      span {
        padding: 0 5px;
      }

      img {
        width: 30px;
      }
    }
  }

  .actions {
    display: flex;
    align-items: center;
    color: #ff8455;
  }
}
</style>
