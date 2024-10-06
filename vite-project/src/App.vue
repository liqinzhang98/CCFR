<template>
  <header class="header">
    <NavBar />
  </header>
  <TheLayout>
     <router-view></router-view>
  </TheLayout>
</template>

<script setup>
import TheIcon from './components/TheIcon.vue';
import "./assets/base.css";
import NavBar from './components/NavBar.vue';
import TheLayoutVue from './components/TheLayout.vue';
</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.header {
  height: 80px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
}
</style>
