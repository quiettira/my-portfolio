// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBgA1DE-DhBbxEC4RifF7olmZoCMtxIDzE",
  authDomain: "portfolio-tira.firebaseapp.com",
  projectId: "portfolio-tira",
  storageBucket: "portfolio-tira.firebasestorage.app",
  messagingSenderId: "900460923673",
  appId: "1:900460923673:web:d5a5336c4766d446c19388",
  measurementId: "G-0G1LS5WK8J"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);

const analytics = getAnalytics(app);
