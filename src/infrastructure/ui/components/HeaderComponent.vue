<template>
  <header>
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo TRADIC">
    </div>
    <div class="tcgs">
      <img src="@/assets/lorcana-logo.webp" alt="Logo Lorcana">
      <img src="@/assets/magic.webp" alt="Logo Magic">
      <img src="@/assets/Pokémon_Trading_Card_Game_logo.svg.png" alt="Logo Pokémon">
    </div>
    <div class="left">
      <div><input type="text" placeholder="Rechercher..."></div>
      <div><account-icon /></div>
    </div>
  </header>
</template>

<script setup lang="ts">
import AccountIcon from 'vue-material-design-icons/Account.vue';
</script>

<style scoped lang="scss">
  header {
    background-color: #161624;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    height: 56px;
  }

  .left {
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      border-radius: 26px;
      background-color: #E8F0F6;
      padding: 4px 32px;
    }
  }
</style>
