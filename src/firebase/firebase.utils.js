import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import config from './config.js'


  

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapshot = await userRef.get()

    console.log(snapshot)

    if(!snapshot.exists){
      const { displayName, email } = userAuth
      const createdAt = new Date()
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(err) {
        console.log('Error creating user', err.message)
      }
    }

    return userRef
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  //google autentication utility

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;