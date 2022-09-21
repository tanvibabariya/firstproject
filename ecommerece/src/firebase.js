// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCILC-7rDZI0nIGcJ_9Gg5K9gBcIPXLYqA",
  authDomain: "e-commerece-48351.firebaseapp.com",
  projectId: "e-commerece-48351",
  storageBucket: "e-commerece-48351.appspot.com",
  messagingSenderId: "231989386858",
  appId: "1:231989386858:web:46f400754c0f19307cb413",
  measurementId: "G-ZEX7D2WDKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);