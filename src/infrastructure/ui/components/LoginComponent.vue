<template>
  <div class="login-modal roboto-regular">
    <p class="title">Connexion</p>
    <div class="container">
      <p>Email</p>
      <input class="roboto-light" placeholder="Entrez votre email" type="text" name="" id="">
    </div>
    <div class="container">
      <p>Mot de passe</p>
      <input class="roboto-light" placeholder="Entrez votre mot de passe" type="password" name="" id="">
    </div>
    <button class="roboto-regular">Connexion</button>
    <p class="secondary-color">Mot de passe oublié ?</p>
    <p>Pas encore de compte ? <span class="secondary-color">S'inscrire</span></p>
  </div>
</template>

<script setup lang="ts">
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 78px;

  .title {
    font-size: 32px;
    color: #FF8455;
    text-transform: uppercase;
    align-self: center;
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


  button {
    background-color: $secondary-color;
    color: $primary-dark-color;
    padding: 4px 32px;
    font-size: 32px;
    border-radius: 30px;
    border: none;
  }
}
</style>
