<template>
  <div class="login-modal_connection">
    <p class="title">Connexion</p>
    <div class="container">
      <p>Email</p>
      <input class="roboto-light" placeholder="Entrez votre email" type="text" v-model="login" />
    </div>
    <div class="container">
      <p>Mot de passe</p>
      <input
        class="roboto-light"
        placeholder="Entrez votre mot de passe"
        type="password"
        v-model="password"
      />
    </div>
    <div class="connection">
      <button class="roboto-regular" @click="connect">Connexion</button>
      <p class="roboto-light error" v-if="error != ''">{{ error }}</p>
    </div>
    <p class="secondary-color forgotPassword" @click="forgotPassword">Mot de passe oublié ?</p>
    <p>
      Pas encore de compte ?
      <span class="secondary-color signIn" @click="signIn">S'inscrire</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type UserConnectionRequest from '@/domain/usecase/UserConnection/request'
import type UserConnectionOutput from '@/domain/usecase/UserConnection/output'
import userConnectionUsecase from '@/domain/usecase/UserConnection/usecase'
import { store } from '@/domain/store/user'
import UserComponent from './UserComponent.vue'
import ForgotPasswordComponent from './ForgotPasswordComponent.vue'
import SignInComponent from './SignInComponent.vue'

const emit = defineEmits(['changeComponent'])

const login = ref('')
const password = ref('')
const error = ref('')

const connect = () => {
  const request: UserConnectionRequest = {
    login: login.value,
    password: password.value,
  }

  const output: UserConnectionOutput = {
    present: (response) => {
      if (response.error) {
        error.value = response.error
        return
      }

      store.user = response.user
      login.value = ''
      password.value = ''
      emit('changeComponent', UserComponent)
    },
  }

  userConnectionUsecase(request, output)
}

const forgotPassword = () => {
  emit('changeComponent', ForgotPasswordComponent)
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
