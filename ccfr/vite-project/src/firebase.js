// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { initializeFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMWlcmJWj-6vbDEnwy6nCD5dfUN4ltXwY",
  authDomain: "cp-echidna.firebaseapp.com",
  projectId: "cp-echidna",
  storageBucket: "cp-echidna.appspot.com",
  messagingSenderId: "648393625868",
  appId: "1:648393625868:web:b7492f9fdf4f13c9e87929"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig, {ignoreUndefinedProperties: true});

const db = initializeFirestore(app, {ignoreUndefinedProperties: true})

export{ 
    db
}