<template>
  <nav class="navbar">
      <!-- <router-link to="/"><TheIcon icon="home" /></router-link> -->
      <img src="../assets/11.png" class = "avatar" />
      <img src="../assets/22.png" class = "avatar" />
      <img src="../assets/33.png" class = "avatar" />
      <img src="../assets/44.png" class = "avatar" />
  </nav>
</template>
<script setup>
import TheIcon from "./TheIcon.vue";

</script>
<style scoped>
.navbar {
  width: 100vw;
  height: 80px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
}
.navbar svg {
  width: 38px;
  height: 38px;
}

.navItems {
  justify-self: end;
  display: flex;
  gap: 24px;
  align-items: center;
}

.navItems > button {
  border: none;
  background: none;
}

.avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #eee;
  object-fit: cover;
  object-position: top center;
}
</style>
