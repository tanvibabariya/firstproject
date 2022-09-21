// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyB5e4xCXCBBhFx1MDFaZJpZcIeh-Ulb7Ws",
  authDomain: "admin-ecomerece.firebaseapp.com",
  projectId: "admin-ecomerece",
  storageBucket: "admin-ecomerece.appspot.com",
  messagingSenderId: "881320899640",
  appId: "1:881320899640:web:94583ad69614cfb3f1e2cd",
  measurementId: "G-PFSLV9DJ8X"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);