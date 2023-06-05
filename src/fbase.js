// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqBDyRZmW5EQ3TUrf4-bDXfLayt7_rEMs",
  authDomain: "pard-website-acfdd.firebaseapp.com",
  projectId: "pard-website-acfdd",
  storageBucket: "pard-website-acfdd.appspot.com",
  messagingSenderId: "478204244979",
  appId: "1:478204244979:web:a34f359bdf1cd5a298d886",
  measurementId: "G-RNCFYTHCP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);