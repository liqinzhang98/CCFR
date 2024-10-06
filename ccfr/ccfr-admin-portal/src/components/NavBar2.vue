<template>
  <nav>
    <div class="nav-wrapper blue lighten-2">
      <div class="container">
        <div class="brand-logo center">
          CCFR Admin Portal
        </div>
      </div>
      <ul class="right hide-on-med-and-down">
        <li><a class="set-font" @click="directToReviewers">Reviewers</a></li>
        <li><a class="set-font" @click="directToApplicants">Applicants</a></li>
        <li><a class="set-font" @click="signOut">Sign Out</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
  import { auth } from '@/firebase.js'
  import router from '@/router/index.js'

  const directToReviewers = () => {
    router.push({ name: 'reviewers'})
  }

  const directToApplicants = () => {
    router.push({ name: 'applicants'})
  }

  const signOut = () => {
    let result = window.confirm("Are you sure you want to sign out of the system?")
    if (result) {
      auth.signOut()
      router.push({ name: 'adminSignIn'})
    }
  }
</script>

<style scoped>
  .set-font {
    font-size: 20px;
  }
</style>