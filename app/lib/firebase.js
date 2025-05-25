import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCYJu7EclEky846dinOg0ZYs-e9C2oo6pw",
  authDomain: "devlogy-bc080.firebaseapp.com",
  projectId: "devlogy-bc080",
  storageBucket: "devlogy-bc080.firebasestorage.app",
  messagingSenderId: "851818005407",
  appId: "1:851818005407:web:ad587160b2e799b14033aa",
  measurementId: "G-Q2DVVD5L1T"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()