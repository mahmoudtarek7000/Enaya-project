import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAqdKtZ7LMMbJVYqfpHuP3NBkagv67Opdg",
  authDomain: "enaya-e08b6.firebaseapp.com",
  projectId: "enaya-e08b6",
  storageBucket: "enaya-e08b6.appspot.com",
  messagingSenderId: "120106270512",
  appId: "1:120106270512:web:1882f1a7c1ae9bc5ae52f5",
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

// export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
// GoogleProvider.setCustomParameters({prompt : 'select_account'})
// export const signInWitthGoogle = () => {
//   auth.signInWithPopup(GoogleProvider)
// }
// export const handleUserProfile = async ({ userAuth, additionalData }) => {
//   if (!userAuth) return;
//   const { uid } = userAuth;

//   const userRef = db.doc(`users/${uid}`);
//   const snapshot = await userRef.get();

//   if (!snapshot.exists) {
//     const { name, email } = userAuth;
//     const timestamp = new Date();
//     const userRoles = ["user"];

//     try {
//       await userRef.set({
//         name,
//         email,
//         createdDate: timestamp,
//         userRoles,
//         ...additionalData,
//       });
//     } catch (err) {
//       // console.log(err);
//     }
//   }

//   return userRef;
// };
