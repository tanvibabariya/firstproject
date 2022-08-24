import {  createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase";


export const  signupAPI = (data)=>{
   console.log('signupAPI', data);

   
return new Promise((resolve,reject)=>{
   
   createUserWithEmailAndPassword(auth, data.email, data.password)
     .then((userCredential) => { 
       const user = userCredential.user;
       onAuthStateChanged(auth, (user) => {
        if (user) {
          sendEmailVerification(user)
        
        } else {
          // User is signed out
          // ...
        }
      });
     })

     .then((user)=>{
      onAuthStateChanged(auth, (user) => {
        if (user.emailverified) {
          resolve({payload:"Successfully register email id"});
        } else {
         resolve({payload:"Please verified email"});
        }
      });
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
         if(errorCode.localeCompare("auth/email-already-in-use" === 0)){
         reject({payload:"already use email"});
         }
         else{
          reject({payload:errorCode});
         }
       
    
     });
   })
}
