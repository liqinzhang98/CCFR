<template>
    <div class="register">
        <p class = "title">Sign Up</p>
        <input 
        type = "text" 
        class = "firstnameInput" 
        v-model = "firstName" 
        placeholder="Enter first Name"
        />
        <input 
        type = "text" 
        class = "surnameInput" 
        v-model = "surname" 
        placeholder="Enter surname"
        />
        <input 
        type = "text" 
        class = "emailInput" 
        v-model = "email" 
        placeholder="Enter Email"
        />
        <input 
        type = "text" 
        class = "passwordInput" 
        v-model ="password" 
        placeholder="Enter Password"
        />
        
        <select name="type" @change="onChange($event)" class="container">
            <option value="applicant" class = "option"> Applicant </option>
            <option value="COMMITTEEreviewer" class = "option">Steering Committee Member</option>
            <option value="CCFRreviewer" class = "option">CCFR Chair</option>
            <option value="BWGreviewer" class = "option">BWG Chair</option>
        </select>
        
        <button 
        class = "signUpButton"
        v-on:click="SignUp"
        >Sign Up
        </button>
        <p class = "infor" @click = "toLogin">
            “Already a member? Login”
        </p>
    </div>
    </template>
    
    <script>
    
    import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
    import { doc, setDoc } from "firebase/firestore";
    import { ElMessage } from "element-plus";
    import {db} from "../firebase.js";  

    export default{
        name: 'SignUp',
        data()
        {
            return {
                firstName: '',
                surname: '',
                email: '',
                password: '',
                role: 'applicant',
            }
        },
        methods:{
            toLogin(){
              this.$router.replace("/login")
            },
            onChange(e){
                this.role = e.target.value;
                console.log(this.role)
            },
            async SignUp()
             {
                console.log(this.email);
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, this.email, this.password)
                    .then(async (data)=> {
                        this.$router.push({name:'login'});
                        console.log(auth.currentUser.uid);
                        await setDoc(doc(db, "user", auth.currentUser.uid), {
                           email: this.email,
                           firstName: this.firstName,
                           surname: this.surname,
                           type: this.role,
                           approved: false,
                        });
                        ElMessage.success("Registered Successfully !");
                    }).catch((error) => {
                        ElMessage.error(error.message);
                    })
             }
        }
    }
    </script>
    
    <style scoped>
    .title{
        font-family: Avenir;
        font-size: 60px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    
        position:absolute;
        left:50%;
        top:20%;
        transform: translate(-50%,-50%);
    }
    .surnameInput{
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
        top:30%;
        transform: translate(-50%,-50%);
    }
    .firstnameInput{
        border-radius: 4px;
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 20px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid skyblue;
    
        position:absolute;
        left:50%;
        top:40%;
        transform: translate(-50%,-50%);
    }
    .emailInput{
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
        top:50%;
        transform: translate(-50%,-50%);
    }
    .passwordInput{
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
        top:60%;
        transform: translate(-50%,-50%);
    }
    .container{
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
        top:70%;
        transform: translate(-50%,-50%);
        text-align: left;
        font-family: Avenir;
    }
    .signUpButton{
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
        top:80%;
        transform: translate(-50%,-50%);
    }
    .infor{
        font-family: Avenir;
        color: #1da0ff;
        cursor: pointer;
    
        position:absolute;
        left:50%;
        top:85%;
        transform: translate(-50%,-50%);
    }
    </style>