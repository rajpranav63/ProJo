import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCKp7szlDYCvZ7L_HKtbDrq4ZnPsb6LAf0",
  authDomain: "projo-71b74.firebaseapp.com",
  projectId: "projo-71b74",
  storageBucket: "projo-71b74.appspot.com",
  messagingSenderId: "450562340762",
  appId: "1:450562340762:web:ac7cb90373544454ad2c23",
  measurementId: "G-YSJ3GZGKBW"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }