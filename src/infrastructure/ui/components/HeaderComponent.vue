<template>
  <header>
    <div class="logo">
      <router-link :to="{ name: 'home' }"
        ><img src="@/assets/logo.png" alt="Logo TRADIC"
      /></router-link>
    </div>
    <div class="tcgs">
      <img src="@/assets/lorcana-logo.webp" alt="Logo Lorcana" />
    </div>
    <div class="right">
      <div><input type="text" placeholder="Rechercher..." /></div>
      <div><account-icon v-on:click="handler" /></div>
    </div>
  </header>
  <SidebarRightComponent v-if="showLogin" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AccountIcon from 'vue-material-design-icons/Account.vue'
import SidebarRightComponent from './SidebarRightComponent.vue'
const showLogin = ref(false)
const handler = () => {
  showLogin.value = !showLogin.value
}
</script>

<style scoped lang="scss">
header {
  background-color: #161624;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 60px;
}

.tcgs {
  gap: 100px;
  display: flex;

  img {
    cursor: pointer;
  }
}

img {
  height: 56px;
}

.right {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  input {
    border-radius: 26px;
    background-color: #e8f0f6;
    padding: 4px 32px;
    width: 140px;
  }
}
</style>
