<template>
  <div class="login-modal roboto-regular">
    <div v-if="store.user">
      <p>Connecté en tant que {{ store.user.username }}</p>
      <button class="roboto-regular" @click="disconnect">Déconnexion</button>
    </div>
    <div class="login-modal_connection" v-else>
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
      <p class="secondary-color">Mot de passe oublié ?</p>
      <p>Pas encore de compte ? <span class="secondary-color">S'inscrire</span></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type Request from '@/domain/usecase/UserConnection/request'
import type Output from '@/domain/usecase/UserConnection/output'
import usecase from '@/domain/usecase/UserConnection/usecase'
import { store } from '@/infrastructure/store/user'

const login = ref('')
const password = ref('')
const error = ref('')

const connect = () => {
  const request: Request = {
    login: login.value,
    password: password.value,
  }

  const output: Output = {
    present: (response) => {
      if (response.error) {
        error.value = response.error
        return
      }

      store.user = response.user
      login.value = ''
      password.value = ''
    },
  }

  usecase(request, output)
}

const disconnect = () => {
  store.user = undefined
}
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
}
</style>
