import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAqdKtZ7LMMbJVYqfpHuP3NBkagv67Opdg",
    authDomain: "enaya-e08b6.firebaseapp.com",
    projectId: "enaya-e08b6",
    storageBucket: "enaya-e08b6.appspot.com",
    messagingSenderId: "120106270512",
    appId: "1:120106270512:web:1882f1a7c1ae9bc5ae52f5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const dataBase = firebase.firestore();