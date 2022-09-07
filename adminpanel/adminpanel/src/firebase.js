// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzfIDUkYUbYS0eFgKnRLxDqobguy2O1G8",
  authDomain: "admin-4b99d.firebaseapp.com",
  projectId: "admin-4b99d",
  storageBucket: "admin-4b99d.appspot.com",
  messagingSenderId: "347387935529",
  appId: "1:347387935529:web:77d46d34a8098ea8b25538",
  measurementId: "G-HQW65YBT2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const db = getFirestore(app);