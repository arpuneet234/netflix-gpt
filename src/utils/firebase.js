// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA32tHu8br39zXiY8Xx4QASD2v_Ft__Up0",
  authDomain: "netflixgpt-70a71.firebaseapp.com",
  projectId: "netflixgpt-70a71",
  storageBucket: "netflixgpt-70a71.firebasestorage.app",
  messagingSenderId: "31844337940",
  appId: "1:31844337940:web:9247d3849359a626a65a01",
  measurementId: "G-RQZY6Q668X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
