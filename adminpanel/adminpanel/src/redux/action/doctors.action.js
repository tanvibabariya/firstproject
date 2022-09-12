import * as Actiontype from '../actiontype'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db, storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';



export const getDoctors = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "doctors"));
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() })
    });
    dispatch({ type: Actiontype.GET_DOCTORS, payload: data })
  } catch (error) {
    dispatch(errordoctors(error.message));
  }
} 


export const addDoctors = (data) => async (dispatch) => {
  console.log(data);
  try {

    let Filename = Math.floor(Math.random() * 100000000).toString();

    const docRef = ref(storage, 'doctors/' + Filename)
    uploadBytes(docRef, data.pro_img)
    .then(async (snapshot) => {
      getDownloadURL(snapshot.ref)
        .then(async (url) => {
          const docRef = await addDoc(collection(db, "doctors"), {...data , pro_img:url, Filename:Filename });
          dispatch({ type: Actiontype.ADD_DOCTORS, payload: { id: docRef.id, ...data,pro_img:url, Filename:Filename} })
        });
    } );
} catch (error) {
  dispatch(errordoctors(error.message));
}
}

export const deleteDoctors = (id) => async (dispatch) => {
  console.log(id);
  try {
    await deleteDoc(doc(db, "doctors", id));
    dispatch({ type: Actiontype.DELETE_DOCTORS, payload: id })


  } catch (error) {
    dispatch(errordoctors(error.message));
  }
}

export const updateDoctors = (data) => async (dispatch) => {
  try {
    const docRef = doc(db, "doctors", data.id);
    await updateDoc(docRef, {
      name: data.name,
      aptprice: data.aptprice,
      degree: data.degree,
      discription: data.discription,
    });
    dispatch({ type: Actiontype.UPDATE_DOCTORS, payload: data })

  } catch (error) {
    dispatch(errordoctors(error.message));
  }
}

export const errordoctors = (error) => (dispatch) => {
  dispatch({ type: Actiontype.ERROR_DOCTORS, payload: error })
}