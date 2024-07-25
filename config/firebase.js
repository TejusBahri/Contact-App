// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCSq4CSwcVSb3cq_M77tp-sEIKPbSnOXs",
  authDomain: "vite-contact-5902b.firebaseapp.com",
  projectId: "vite-contact-5902b",
  storageBucket: "vite-contact-5902b.appspot.com",
  messagingSenderId: "327061708666",
  appId: "1:327061708666:web:1fdb6d054bc569ca3bc0c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
