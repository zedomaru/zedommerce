import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCTV0dZMseh5lB2uZoeYXx3xgouBUOrfGQ",
    authDomain: "zedommerce.firebaseapp.com",
    databaseURL: "https://zedommerce.firebaseio.com",
    projectId: "zedommerce",
    storageBucket: "zedommerce.appspot.com",
    messagingSenderId: "331826966992",
    appId: "1:331826966992:web:9f58a40b960d3f56f3c9d5",
    measurementId: "G-BRC4VDXM3Z"
  };

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
//trigger google pop up for selecting account
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase