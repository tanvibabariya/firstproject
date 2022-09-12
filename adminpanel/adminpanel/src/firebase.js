// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDBUxJW5imd_ecrEhzGgYEjGy2N3R3c8ak",
  authDomain: "admin-doctor.firebaseapp.com",
  projectId: "admin-doctor",
  storageBucket: "admin-doctor.appspot.com",
  messagingSenderId: "216501561216",
  appId: "1:216501561216:web:fbe40e19568884145e8365",
  measurementId: "G-S5P6S9SCM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

