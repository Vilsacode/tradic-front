<template>
  <p>Connecté en tant que {{ store.user?.username }}</p>
  <button class="roboto-regular" @click="disconnect">Déconnexion</button>
</template>

<script setup lang="ts">
import { store } from '@/domain/store/user'
import LoginComponent from './LoginComponent.vue'

const emit = defineEmits(['changeComponent'])

const disconnect = () => {
  store.user = undefined
  emit('changeComponent', LoginComponent)
}
</script>

<style scoped lang="scss">
.login-modal_connection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 78px;

  .title {
    font-size: 32px;
    color: #ff8455;
    text-transform: uppercase;
    align-self: center;
  }

  .connection {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
  }

  .error {
    color: $error-color;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: stretch;

    input {
      &::placeholder {
        color: $primary-color;
      }
      &:focus-visible {
        outline: none;
      }
      color: $font-color;
      font-size: 16px;
      background: none;
      border: none;
      border-bottom: 1px solid $secondary-color;
    }
  }
}
button {
  background-color: $secondary-color;
  color: $primary-dark-color;
  padding: 4px 32px;
  font-size: 32px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
}

.forgotPassword,
.signIn {
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
</style>
