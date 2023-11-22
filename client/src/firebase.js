// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 //apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
 apiKey: "AIzaSyBCLRsLNW4JhUFq1ojCrSr1zfghjdytg",
  authDomain: "mern-estate-main.firebaseapp.com",
  projectId: "mern-estate-main",
  storageBucket: "mern-estate-main.appspot.com",
  messagingSenderId: "241007414790",
  appId: "1:241007414790:web:bdc311edaf646a560c7d87",
  measurementId: "G-G1D47X31ZW"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


