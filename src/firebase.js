import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: 'AIzaSyCc31NdagOG4GC46AvvRGkNifjH8FYQUXU',
  authDomain: 'pawlog-app.firebaseapp.com',
  databaseURL: 'https://pawlog-app.firebaseio.com',
  projectId: 'pawlog-app',
  storageBucket: 'pawlog-app.appspot.com',
  messagingSenderId: '525776697651',
  appId: '1:525776697651:web:1bd1770f88444d25142646',
  measurementId: 'G-FVG9EW49G5',
}

firebase.initializeApp(firebaseConfig)

export const storage = firebase.storage()

export const db = firebase.firestore()

export const auth = firebase.auth()
