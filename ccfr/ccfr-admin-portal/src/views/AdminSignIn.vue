<template>
  <NavBar1/>
  <div class="vertically-align set-width container">
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="email" class="validate" v-model="credential.email">
            <label>Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="password" class="validate" v-model="credential.password">
            <label>Password</label>
          </div>
        </div>
      </form>
      <div class="center-align">
        <button class="btn waves-effect waves-light" @click="signIn">Sign In</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import NavBar1 from '../components/NavBar1.vue'
  import { reactive } from 'vue'
  import { doc, getDoc } from 'firebase/firestore'
  import { signInWithEmailAndPassword } from "firebase/auth"
  import { db, auth } from '@/firebase.js'
  import router from '@/router/index.js'

  const credential = reactive({
    email: '',
    password: ''
  })

  const signIn = () => {
    if (credential.email == '') {
      alert('The email should not be empty.')
      return
    }

    if (credential.password == '') {
      alert('The password should not be empty.')
      return
    }

    /*
      Check if the email exists in the Cloud Firestore.
    */
    getDoc(doc(db, "user", credential.email)).then(docSnap => {
      if (!docSnap.exists()) {
        alert("The email address entered is not one of the administrator emails.")
        return
      } else {
        /*
          Sign in to the CCFR Admin Portal.
        */
        signInWithEmailAndPassword(auth, credential.email, credential.password)
          .then(() => {
            router.push({ name: 'reviewers' })
          })
          .catch((error) => {
            switch (error.code) {
              case "auth/wrong-password":
                alert("The password is incorrect.")
                break;
              default:
                alert(error.message)
            }
          })
          }
        })
  }
</script>

<style scoped>
  .vertically-align {
    margin: 0px;
    padding: 0px;
    float: left;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    left: 50%;
  }
  .set-width {
    max-width: 400px;
  }
</style>