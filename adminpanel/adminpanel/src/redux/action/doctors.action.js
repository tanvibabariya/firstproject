import * as Actiontype from '../actiontype'
  import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
  import { db, storage } from '../../firebase';
  import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';



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
            const docRef = await addDoc(collection(db, "doctors"), { ...data, pro_img: url, Filename: Filename });
            dispatch({ type: Actiontype.ADD_DOCTORS, payload: { id: docRef.id, ...data, pro_img: url, Filename: Filename}})
          });
      });
  } catch (error) {
    dispatch(errordoctors(error.message));
  }
}

export const deleteDoctors = (data) => async (dispatch) => {
  try {
    const docRef = ref(storage, 'doctors/' + data.Filename);
    deleteObject(docRef).then(async () => {
      await deleteDoc(doc(db, "doctors", data.id));
      dispatch({ type: Actiontype.DELETE_DOCTORS, payload: data.id })
    }).catch((error) => {
      dispatch(errordoctors(error.message));
    });
  } catch (error) {
    dispatch(errordoctors(error.message));
  }
}

export const updateDoctors = (data) => async (dispatch) => {
  console.log(data);
  try {
    const docRef = doc(db, "doctors", data.id);

    if (typeof data.pro_img === "string") {
      await updateDoc(docRef, {
        name: data.name,
        aptprice: data.aptprice,
        degree: data.degree,
        discription: data.discription,
        pro_img: data.pro_img,
        Filename: data.Filename
      });
      dispatch({ type: Actiontype.UPDATE_DOCTORS, payload: data })
    } else {
      //1
      let Filename = Math.floor(Math.random() * 100000000).toString();
      const docRefDel = ref(storage, 'doctors/' + data.Filename);
      const docRefIns = ref(storage, 'doctors/' + Filename)

      deleteObject(docRefDel)
        .then(async () => {
          uploadBytes(docRefIns, data.pro_img)
            .then(async (snapshot) => {
              getDownloadURL(snapshot.ref)
                .then(async (url) => {

                  await updateDoc(docRef, {
                    name: data.name,
                    aptprice: data.aptprice,
                    degree: data.degree,
                    discription: data.discription,
                    pro_img: url,
                    Filename: Filename
                  });
                  dispatch({ type: Actiontype.UPDATE_DOCTORS, payload: {...data, pro_img: url,Filename: Filename } })
                })
            })
        })

    }


  } catch (error) {
    dispatch(errordoctors(error.message));
  }
}

export const errordoctors = (error) => (dispatch) => {
  dispatch({ type: Actiontype.ERROR_DOCTORS, payload: error })
}

