<template>
  <div class="login-modal roboto-regular">
    <component :is="componentId" v-on:changeComponent="changeComponent"></component>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LoginComponent from './LoginComponent.vue'

const componentId = ref(LoginComponent)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const changeComponent = (component: any) => (componentId.value = component)
</script>

<style scoped lang="scss">
.login-modal {
  width: 345px;
  height: calc(100vh - 80px - 147px - 147px);
  position: fixed;
  top: 80px;
  right: 0;
  background-color: $primary-dark-color;
  opacity: 95%;
  padding: 147px 35px;
}
</style>
