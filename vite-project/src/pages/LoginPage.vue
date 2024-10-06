<template>
    <div class="loginPage">
      <p class = "title">Login</p>
      <input 
          type="text" 
          class = "emailInput" 
          placeholder="Enter Email"
          v-model = "email"
      />
      <input 
          type="text"  
          class = "passwordInput"
          placeholder="Enter Password"
          v-model = "password"
      />
      <button 
          type="submit" 
          class="loginButton"
          @click="submitData"
          >Login
      </button>
      <p class = "recoverButton" @click = "recoverPassword">
        "Reset password"
      </p>
      <p class = "infor" @click = "toSignUp">
        "Not a member? Sign up now"
      </p>
    </div>
  </template>
  
  
  <script>
 import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
 import {doc, getDoc} from "firebase/firestore"
 import {db} from "../firebase.js"; 
 import CurrentUserID from "../stores/CurrentUserID";
 import { ElMessage } from "element-plus";

  export default {
      name:'submitData',
      data()
      {
          return {
              name: '',
              email: '',
              password: '',
              currentUserID: '',
          }
      },
      methods: {
          async submitData() {
              console.log(this.email);
              console.log(this.password);
              
              const auth = getAuth();
              signInWithEmailAndPassword(auth, this.email, this.password)
                  .then(async (data)=> {               
                      CurrentUserID.methods.setCurrentUid(auth.currentUser.uid);
                      this.currentUserID = CurrentUserID.data.uID

                      const docRef = doc(db, "user", this.currentUserID);
                      const docSnap = await getDoc(docRef);
                      console.log("user data", docSnap.data());
                      if(docSnap.data().type == "applicant" ){
                        this.$router.replace("/user/"+this.currentUserID);
                        ElMessage.success("Applicant login successfully !");
                      }
                      if(docSnap.data().type == "BWGreviewer" ){
                        if(docSnap.data().approved == true ){
                            this.$router.replace("/BWGreviewer/"+this.currentUserID);
                            ElMessage.success("BWG reviewer login successfully !");
                        }else{
                            ElMessage.error("Your account hasn't been approved by admin !");
                        }
                      }
                      if(docSnap.data().type == "COMMITTEEreviewer"){
                        if(docSnap.data().approved == true ){
                            this.$router.replace("/COMMITTEEreviewer/"+this.currentUserID);
                            ElMessage.success("COMMITTEE reviewer login successfully !");
                        }else{
                            ElMessage.error("Your account hasn't been approved by admin !");
                        }
                      }
                      if(docSnap.data().type == "CCFRreviewer"){
                        if(docSnap.data().approved == true ){
                            this.$router.replace("/CCFRreviewer/"+this.currentUserID);
                            ElMessage.success("CCFR reviewer login successfully !");
                        }else{
                            ElMessage.error("Your account hasn't been approved by admin !");
                        }
                      }
                  })
                  .catch((error) => {
                      console.log(error.code);
                      switch (error.code){
                          case "auth/invalid-email":
                              ElMessage.error("Invalid email");
                              break;
                          case "auth/user-not-found":
                              ElMessage.error("No account with that email");
                              break;
                          case "auth/wrong-password":
                              ElMessage.error("Incorrect password");
                              break;
                          default:
                              ElMessage.error("Email or password is incorrect");
                              break;
                      }
                  })
          },
          toSignUp(){
            this.$router.replace("/sign-up")
          },
          recoverPassword(){
            this.$router.replace("/reset-password")
          }
      }
  }
  </script>
  
  
  <style scoped>
  .title {
      font-family: Avenir;
      font-size: 60px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
  
      position:absolute;
      left:50%;
      top:35%;
      transform: translate(-50%,-50%);
  }
  .emailInput {
      border-radius: 4px;
      width: 300px;
      height: 40px;
      padding-left: 20px;
      display: block;
      margin-bottom: 30px;
      margin-right: auto;
      margin-left: auto;
      border: 1px solid skyblue;
  
      position:absolute;
      left:50%;
      top:45%;
      transform: translate(-50%,-50%);
  }
  .passwordInput {
      border-radius: 4px;
      width: 300px;
      height: 40px;
      padding-left: 20px;
      display: block;
      margin-bottom: 30px;
      margin-right: auto;
      margin-left: auto;
      border: 1px solid skyblue;
  
      position:absolute;
      left:50%;
      top:55%;
      transform: translate(-50%,-50%);
  }
  .loginButton {
      border-radius: 4px;
      width: 325px;
      height: 40px;
      border: 1px solid skyblue;
      background: skyblue;
      color: #fff;
      cursor: pointer;
  
      margin-bottom: 30px;
      margin-right: auto;
      margin-left: auto;
  
      position:absolute;
      left:50%;
      top:65%;
      transform: translate(-50%,-50%);
  }
  .infor {
      font-family: Avenir;
      color: #1da0ff;
      cursor: pointer;
  
      position:absolute;
      left:50%;
      top:70%;
      transform: translate(-50%,-50%);
  }
  .recoverButton {
      font-family: Avenir;
      color: #1da0ff;
      cursor: pointer;
  
      position:absolute;
      left:50%;
      top:75%;
      transform: translate(-50%,-50%);
  }
  </style>
  
