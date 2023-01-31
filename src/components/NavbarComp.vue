<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: var(--clr-2)">
  <div class="container-fluid">
    <a class="logo-container me-1 ms-1">
      <router-link :to="{ name: 'home' }"><img alt="logo" src="../assets/logo_header.png" style="width: auto; height: 1.2rem;"/></router-link>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 me-1 ms-1" style="font-size: 1.2rem; font-weight: 900; color: var(--clr-3)">
        <li class="nav-item">
          <a class="nav-link active home-link" aria-current="page" href="#"><router-link :to="{ name: 'home' }">HOME</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link games-link" href="#"><router-link :to="{ name: 'games' }">GAMES</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link new-link disabled" href="#" style="color: red " ><router-link :to="{ name: 'new' }">NEW</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link trending-link disabled" href="#"><router-link :to="{ name: 'trending' }">TRENDING</router-link></a>
        </li>
      </ul>
      <!--<form class="d-flex mt-2 mb-2 me-5 ms-5" role="search" style="visibility: hidden;">
        <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search">
        <button class="btn" type="submit" style="transform: translateX(-5rem); --bs-btn-hover-color: var(--clr-2);">Search</button>
      </form>-->
      <div class="login-container mb-2 mb-lg-0 ms-1 me-1">
        <a href="#">
          <button class="btn custom-btn navbar-button" style="font-size: 1rem; font-weight: 700; color: var(--clr-3)" v-if="!loggedIn" @click="swapLoginModal"><font-awesome-icon icon="fa-solid fa-arrow-right-to-bracket" /> LOG IN </button>
          <button class="btn custom-btn navbar-button" style="font-size: 1rem; font-weight: 700; color: var(--clr-3)" v-else @click="logOut"><font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" /> LOG OUT </button> </a>
        <a href="#">
          <button class="btn custom-btn navbar-button" style="font-size: 1rem; font-weight: 700; color: var(--clr-3)" @click="swapSignupModal"> SIGN UP</button>
        </a>
      </div>
    </div>
  </div>
  <div v-if="showSignupModal">
    <SignupComp/>
  </div>
  <div v-if="showLoginModal">
    <LoginComp/>
  </div>
</nav>
</template>

<script>
import SignupComp from "@/components/SignupComp.vue";
import LoginComp from "@/components/LoginComp.vue";

import { mapState, mapMutations } from "vuex";

export default {
  components: { SignupComp, LoginComp },

  methods: {
    ...mapMutations(["swapSignupModal", "swapLoginModal", "logOut"]),
  },

  computed: {
    ...mapState(["showSignupModal", "showLoginModal", "loggedIn"]),
  },
};
</script>

<style>
.logo-container img {
  width: 150px;
  margin: .2rem 1rem;
}

.header-bar {
  background-color: var(--clr-2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.header-bar > div {
  width: 20rem;
  margin: 0.75rem 0;
}

.login-container {
  display: flex;
  flex-direction: row;
}
</style>
  