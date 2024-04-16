// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAZ8lhSQ4zdPfzIci4glYeLt0YV7aIhdzE",
  authDomain: "furniture-next.firebaseapp.com",
  projectId: "furniture-next",
  storageBucket: "furniture-next.appspot.com",
  messagingSenderId: "91654917305",
  appId: "1:91654917305:web:9e90449107aceb3c025f68"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)

