import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBMWlcmJWj-6vbDEnwy6nCD5dfUN4ltXwY',
  authDomain: 'cp-echidna.firebaseapp.com',
  projectId: 'cp-echidna',
  storageBucket: 'cp-echidna.appspot.com',
  messagingSenderId: '648393625868',
  appId: '1:648393625868:web:b7492f9fdf4f13c9e87929'
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

function isAuthenticated() {
  let authenticated = null
  onAuthStateChanged(auth, user => {
    console.log(user)
    if (user) {
      authenticated = true
    } else {
      authenticated = false
    }
  })
  return authenticated
}

const db = getFirestore(app)

export {
  auth, db, isAuthenticated
}