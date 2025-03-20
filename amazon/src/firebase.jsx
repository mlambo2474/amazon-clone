import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXZg929mlFTo-WaMusUxh8TaRNyM6KUD8",
    authDomain: "app-6078f.firebaseapp.com",
    projectId: "app-6078f",
    storageBucket: "app-6078f.firebasestorage.app",
    messagingSenderId: "755508123352",
    appId: "1:755508123352:web:35915144ea210ec515a9ad",
    measurementId: "G-2S91FN9LCR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth =firebaseApp.auth();
  const db = firebaseApp.firestore();

  export {auth, db};