// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHJyrSkjNIyeKXspvW20dIZ2wGnL2IOB4",
  authDomain: "food-site-41172.firebaseapp.com",
  projectId: "food-site-41172",
  storageBucket: "food-site-41172.firebasestorage.app",
  messagingSenderId: "795577929612",
  appId: "1:795577929612:web:01b000af1748942e1e90a9",
  measurementId: "G-6KF6DC0ZGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);