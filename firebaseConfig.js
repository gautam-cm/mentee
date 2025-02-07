// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN7RlltXjg-qHUD9xpoL0wttBrT6QG8qQ",
  authDomain: "mentor-6250b.firebaseapp.com",
  projectId: "mentor-6250b",
  storageBucket: "mentor-6250b.firebasestorage.app",
  messagingSenderId: "845314102673",
  appId: "1:845314102673:web:37631c0b25808ca147b630",
  measurementId: "G-7XJPDP4WCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
