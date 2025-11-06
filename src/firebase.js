// src/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    if (err?.code === "auth/popup-blocked" || err?.code === "auth/cancelled-popup-request") {
      return signInWithRedirect(auth, provider);
    }
    throw err;
  }
};
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);

if (typeof window !== "undefined") {
  import("firebase/analytics").then(async ({ getAnalytics, isSupported }) => {
    try {
      if (await isSupported()) {
        getAnalytics(app);
      }
    } catch (_) {
    }
  });
}
