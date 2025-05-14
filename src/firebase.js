// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAux7_XynyupGRdHpWqbhNRna8EwLXosFU",
  authDomain: "web-dev-final-26af1.firebaseapp.com",
  projectId: "web-dev-final-26af1",
  storageBucket: "web-dev-final-26af1.firebasestorage.app",
  messagingSenderId: "362341609703",
  appId: "1:362341609703:web:a8ff872ba21758211d3242",
  measurementId: "G-MV43N3TTZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);