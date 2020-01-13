import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//firebase config
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

// MASUKIN USER SIGN IN WITH GOOGLE KE DATABASE FIRESTORE
// 1. user sign in with google in the application
// 2. we got information of the signed in user (userAuth)
// 3. we initialize the path to store in our firestore database ('/user/userID')
// 4. then we get data of user using query snapshot
// 5. taking some properties from userAuth and create the new doc in database


//creating user doc to firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {

  //checking if user auth exists / not null, if it doesnt exists then return nothing
  if(!userAuth) return; 
  // console.log(userAuth)
  //initialize which path collection/doc we want to create in firestore 
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  //console.log(userRef)
  //get query snapshot of user
  const snapShot = await userRef.get()
  // console.log(snapShot)
  //checking if the user is exists then we take its....
  if(!snapShot.exists) {
    //taking display name, email, and created at from userAuth
    const {displayName, email} = userAuth
    const createdAt = new Date()
    //insert properties to the firestore database
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      //if error happen logging the error
      console.log('erroe creating user ', error.message)
    }
  }

  return userRef
} 


//put config to App
firebase.initializeApp(config)

//exporting authentication method from firebase
export const auth = firebase.auth()

//exporting firestore database from firebase
export const firestore = firebase.firestore()

//creating new google auth object
const provider = new firebase.auth.GoogleAuthProvider()
//trigger google pop up for selecting account
provider.setCustomParameters({prompt: 'select_account'})
//create pop up sign in with google method with google auth object 
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase