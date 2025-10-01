// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_7CwV-st6CCM_Ovl6H27truLva2keinI",
  authDomain: "plataforma101-d6cbf.firebaseapp.com",
  projectId: "plataforma101-d6cbf",
  storageBucket: "plataforma101-d6cbf.firebasestorage.app",
  messagingSenderId: "578126380257",
  appId: "1:578126380257:web:21d6e2414db169ca6f4ba0",
  measurementId: "G-SP3ZCNQGGR"

};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);