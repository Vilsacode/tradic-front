<template>
  <div class="login-modal_connection">
    <p class="title">S'inscrire</p>
    <div class="container">
      <p>Email</p>
      <input class="roboto-light" placeholder="Entrez votre email" type="text" v-model="login" />
    </div>
    <div class="connection">
      <button class="roboto-regular" @click="signIn">S'inscrire</button>
      <p class="roboto-light error" v-if="error != ''">{{ error }}</p>
    </div>
    <p class="secondary-color forgotPassword" @click="returnToLogin">Retour</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type UserSignInRequest from '@/domain/usecase/UserSignIn/request'
import type UserSignInOutput from '@/domain/usecase/UserSignIn/output'
import userSignInUsecase from '@/domain/usecase/UserSignIn/usecase'
import LoginComponent from './LoginComponent.vue'

const emit = defineEmits(['changeComponent'])

const login = ref('')
const error = ref('')

const signIn = () => {
  const request: UserSignInRequest = {
    login: login.value,
  }

  const output: UserSignInOutput = {
    present: (response) => {
      if (response.error) {
        error.value = response.error
        return
      }

      login.value = ''
      console.log('Forgot password')
    },
  }

  userSignInUsecase(request, output)
}

const returnToLogin = () => {
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
