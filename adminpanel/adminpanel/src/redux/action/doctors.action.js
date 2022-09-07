import * as Actiontype from '../actiontype'
import { addDoc, collection, getDocs } from "firebase/firestore"; 
import {db} from '../../firebase'

export const  getDoctors = () => async(dispatch)=>{
  try{
    const querySnapshot = await getDocs(collection(db, "doctors"));
    let data=[];
    querySnapshot.forEach((doc) => {
    data.push({id:doc.id , ...doc.data()})
    });
    dispatch({type:Actiontype.GET_DOCTORS , payload : data})
  } catch (error) {
    dispatch(errordoctors(error.message));  
}
}


export const  addDoctors = (data) => async(dispatch)=>{
    try{
        const docRef = await addDoc(collection(db, "doctors"), data);
        dispatch({type:Actiontype.ADD_DOCTORS, payload:{ id:docRef.id, ...data }})
          console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        dispatch(errordoctors(error.message));  
     
  }
  }

  export const errordoctors = (error) => (dispatch) => {
    dispatch({ type: Actiontype.ERROR_DOCTORS, payload: error })
  }