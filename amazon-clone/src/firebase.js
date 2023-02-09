// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7e3wg9hJ54QXGZhCuSWcpEB_Q8R4UoHM",
  authDomain: "clone-301d3.firebaseapp.com",
  projectId: "clone-301d3",
  storageBucket: "clone-301d3.appspot.com",
  messagingSenderId: "466569279893",
  appId: "1:466569279893:web:08a3812994d9768c0b9e9c",
  measurementId: "G-42XP6SEL7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);