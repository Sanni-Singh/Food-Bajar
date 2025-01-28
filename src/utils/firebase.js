// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAnalytics} from "firebase/analytics"
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq2SOz65t1rQa69ESwOZxLkhmS8n95_pM",
  authDomain: "food-bajar-6acfb.firebaseapp.com",
  projectId: "food-bajar-6acfb",
  storageBucket: "food-bajar-6acfb.firebasestorage.app",
  messagingSenderId: "727992141795",
  appId: "1:727992141795:web:3b6568dfd1e603369cc2d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const googleAuthProvider  = new GoogleAuthProvider()
export const fireStore = getFirestore(app)