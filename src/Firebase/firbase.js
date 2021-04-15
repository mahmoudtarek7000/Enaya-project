import firebase from 'firebase/app';
import 'firebase/firestore' ;
const firebaseConfig = {
    apiKey: "AIzaSyAqdKtZ7LMMbJVYqfpHuP3NBkagv67Opdg",
    authDomain: "enaya-e08b6.firebaseapp.com",
    projectId: "enaya-e08b6",
    storageBucket: "enaya-e08b6.appspot.com",
    messagingSenderId: "120106270512",
    appId: "1:120106270512:web:8ebf0abe2674e3b6ae52f5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  export const db = firebase.firestore()