import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../firebase';

export const signUpAPI = (data) => {
    console.log('signUpAPI', data);
  
  
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          onAuthStateChanged(auth, (user) => {
            if (user.emailVerified) {
              resolve({ payload: "Successfully register email id" });
            } else {
              sendEmailVerification(user)
                .then(() => {
                  resolve({ payload: "Please verified email" });
                })
            }
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode.localeCompare("auth/email-already-in-use" === 0)) {
            reject({ payload: "already use email" });
          }
          else {
            reject({ payload: errorCode });
          }
        });
    })
  }



  export const signInAPI = (data) =>{
    console.log('signInAPI', data);

    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user.emailVerified) {
            resolve({ payload: user })
          } else {
            reject({ payload: "First Verified email" });
          }
        })
        .catch((error) => {
          const errorCode = error.code;
  
          console.log(errorCode);
          if (errorCode.localeCompare("auth/user-not-found") === 0) {
            reject({ payload: "Do not match email & password" });
          } else {
            reject({ payload: errorCode });
          }
        });
    });
  }

  
export const GoogleSignInAPI = () => {
  return new Promise((resolve, reject) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {

        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;

        resolve({ payload: user })

      }).catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
        reject({ payload: errorCode })
      });

  })
}

export const LogoutAPI = ()=>{
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        resolve({ payload: "Logout successfully" })
      })
      .catch((error) => {
        reject({ payload: error.errorCode });
      })

  })
}

export const ForgotPasswordAPI = (values) => {
  console.log(values);
  return new Promise((resolve, reject) => {
   
     sendPasswordResetEmail(auth, values.email)
    .then(() => {
      resolve({payload: "Please check your email"})
    })
    .catch((error) => {
      reject({payload : error.code});
    })  
  })
}