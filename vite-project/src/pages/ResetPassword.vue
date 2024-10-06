<template>
    <div class="resetPassword">
      <p2 class = "title">Enter the email address</p2>
      <input 
          type="text" 
          class = "emailInput" 
          placeholder="Enter Email"
          v-model = "email"
      />
      <button 
          type="submit" 
          class="resetButton"
          @click="recoverPassword"
          > send recover link
      </button>
      <p class = "infor" @click = "toLogin">
            “Ready to Login?”
        </p>
    </div>
  </template>

  <script>
  import {getAuth,sendPasswordResetEmail} from "firebase/auth";
  export default {
      name:'recoverPassword',
      data()
      {
          return {
              email: '',
          }
      },
      methods: {
            recoverPassword(){
            const auth = getAuth();
            console.log(this.email);
            sendPasswordResetEmail(auth, this.email)
            .then(() => {
                console.log("email sent");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
          },
          toLogin(){
              this.$router.replace("/login")
            },
      }
  }
  </script>

  <style>
      .resetButton {
      font-family: Avenir;
      color: #13232e;
      cursor: pointer;
  
      position:absolute;
      left:50%;
      top:70%;
      transform: translate(-50%,-50%);
  }
  .infor{
        font-family: Avenir;
        color: #1da0ff;
        cursor: pointer;
    
        position:absolute;
        left:50%;
        top:80%;
        transform: translate(-50%,-50%);
    }
  </style>