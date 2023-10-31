// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9e26f.firebaseapp.com",
  projectId: "mern-estate-9e26f",
  storageBucket: "mern-estate-9e26f.appspot.com",
  messagingSenderId: "283353131971",
  appId: "1:283353131971:web:7d14b4c1c3fae01e28ab76",
  measurementId: "G-G6X2LP11KS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);