<template>
  <nav class="navbar grey lighten-5">
    <router-link to="/"><img src="../assets/ccfr.png" /></router-link>

    <div class="navItems">
      <router-link to="/"><TheIcon icon="home" /></router-link>

      <router-link :to="'/sec1/' + this.$route.params.id"><TheIcon icon="publish" /></router-link>

      <div class="profileDropDown">
       <router-link :to="'/user/' + this.$route.params.id"> <img src="../assets/avatarDefault.png" width="42" height="42"/></router-link>


      </div>
      <div class="logout" @click = "logout">
        <router-link :to="'/'"> <img src ="../assets/logoutIcon.jpg" width="42" height="42"/></router-link>
      </div>
    </div>
  </nav>
</template>


<script setup>
import TheIcon from "./TheIcon.vue";
import { useRoute } from 'vue-router'
import { ElMessage } from "element-plus";
const route = useRoute();

async function logout() {
 ElMessage.success("Log out successfully !")
}

</script>
<style scoped>
.navbar {
  width: 80vw;
  height: 80px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  
}
.navbar svg {
  width: 38px;
  height: 38px;
}

.searchInput {
  position: relative;
}

.searchInput input {
  width: 100%;
  padding: 12px;
  padding-left: 36px;

  background: #f1f1f1;
  border-radius: 14px;
  border: none;
}

.searchInput > svg {
  position: absolute;
  left: 0;
  top: 11px;
  left: 12px;
}

.navItems {
  position: absolute;
  justify-self: end;
  display: flex;
  gap: 24px;
  align-items: center;
}

.navItems > button {
  border: none;
  background: none;
}

.profileDropDown {
  position: relative;
}

.profileMenu {
  position: absolute;
  width: max-content;
  padding: 24px 26px;
  list-style: none;
  background: white;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  right: 0;
  display: grid;
  row-gap: 18px;
  transform: translateY(18px);
}

.profileMenu::before {
  content: "";
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  top: -12px;
  right: 10px;
  border-bottom: 12px solid white;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
}

.profileMenu a,
.profileMenu li {
  text-decoration: none;
  cursor: pointer;
}

.profileMenu a:visited {
  color: initial;
}
</style>
