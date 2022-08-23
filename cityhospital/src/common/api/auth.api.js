import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";


export const  signupAPI = (data)=>{
   console.log('signupAPI', data);

   
return new Promise((resolve,reject)=>{
   
   createUserWithEmailAndPassword(auth, data.email, data.password)
     .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
       console.log(user);
       // ...
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
   
       console.log(errorCode , errorMessage);
       // ..
     });
   })
}
