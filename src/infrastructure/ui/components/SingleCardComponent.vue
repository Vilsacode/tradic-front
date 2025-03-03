<template>
  <img class="img" :src="image" :alt="uuid" @click="toggleModal" />
  <div v-if="modalOpen" class="modal" @click="toggleModal">
    <img :src="image" :alt="uuid" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { image, uuid } = defineProps(['image', 'uuid'])

const modalOpen = ref(false)

const toggleModal = () => {
  modalOpen.value = !modalOpen.value
}
</script>

<style lang="scss">
.img {
  width: 100%;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-height: 75vh;
  }
}
</style>
