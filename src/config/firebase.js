// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-Re6mkggcfCeECnVobEzVD6fKXADNiuU",
  authDomain: "fire1-fe361.firebaseapp.com",
  projectId: "fire1-fe361",
  storageBucket: "fire1-fe361.appspot.com",
  messagingSenderId: "1029049658167",
  appId: "1:1029049658167:web:ac8db23043cfe732db48b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
googleProvider.setCustomParameters({
    prompt: 'select_account'
  });