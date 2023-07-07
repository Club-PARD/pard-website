import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBqBDyRZmW5EQ3TUrf4-bDXfLayt7_rEMs",
  authDomain: "pard-website-acfdd.firebaseapp.com",
  projectId: "pard-website-acfdd",
  storageBucket: "pard-website-acfdd.appspot.com",
  messagingSenderId: "478204244979",
  appId: "1:478204244979:web:a34f359bdf1cd5a298d886",
  measurementId: "G-RNCFYTHCP4",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
