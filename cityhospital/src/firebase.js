import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCcyCWyLBZ1SM7z-X4rSt57QcVksDrSyq0",
    authDomain: "cityhospital-9df16.firebaseapp.com",
    projectId: "cityhospital-9df16",
    storageBucket: "cityhospital-9df16.appspot.com",
    messagingSenderId: "854279620623",
    appId: "1:854279620623:web:86a730d78f12d291af7b7a",
    measurementId: "G-RP8W56H9DE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);