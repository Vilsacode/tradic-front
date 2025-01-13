<template>
  <div class="login-modal_connection">
    <p class="title">Mot de passe oublié</p>
    <div class="container">
      <p>Email</p>
      <input class="roboto-light" placeholder="Entrez votre email" type="text" v-model="login" />
    </div>
    <div class="connection">
      <button class="roboto-regular" @click="forgotPassword">Changer de mot de passe</button>
      <p class="roboto-light error" v-if="error != ''">{{ error }}</p>
    </div>
    <p class="secondary-color forgotPassword" @click="returnToLogin">Retour</p>
    <p>
      Pas encore de compte ?
      <span class="secondary-color signIn" @click="signIn">S'inscrire</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type UserForgotPasswordRequest from '@/domain/usecase/UserForgotPassword/request'
import type UserForgotPasswordOutput from '@/domain/usecase/UserForgotPassword/output'
import userForgotPasswordUsecase from '@/domain/usecase/UserForgotPassword/usecase'
import LoginComponent from './LoginComponent.vue'
import SignInComponent from './SignInComponent.vue'

const emit = defineEmits(['changeComponent'])

const login = ref('')
const error = ref('')

const forgotPassword = () => {
  const request: UserForgotPasswordRequest = {
    login: login.value,
  }

  const output: UserForgotPasswordOutput = {
    present: (response) => {
      if (response.error) {
        error.value = response.error
        return
      }

      login.value = ''
      console.log('Forgot password')
    },
  }

  userForgotPasswordUsecase(request, output)
}

const returnToLogin = () => {
  emit('changeComponent', LoginComponent)
}

const signIn = () => {
  emit('changeComponent', SignInComponent)
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
