<template>
  <div class="filters">
    <div class="actives montserrat"></div>
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
  }

  .actions {
    display: flex;
    align-items: center;
    color: #ff8455;
  }
}
</style>
