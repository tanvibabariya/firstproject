import * as ActionType from '../ActionType'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db, storage } from '../../firebase';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';



export const getProduct = () => async (dispatch) => {
    try {
        const querySnapshot = await getDocs(collection(db, "product"));
        let data = [];
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
        });
        dispatch({ type: ActionType.GET_PRODUCT, payload: data })
    } catch (error) {
        dispatch(errorproduct(error.message));
    }
}

export const addProduct = (data) => async (dispatch) => {
    console.log(data);
    try {
        let Filename = Math.floor(Math.random() * 100000000).toString();

        const docRef = ref(storage, 'product/' + Filename)
        uploadBytes(docRef, data.product_img)
            .then(async (snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        const docRef = await addDoc(collection(db, "product"), { ...data, product_img: url, Filename: Filename });
                        dispatch({ type: ActionType.ADD_PRODUCT, payload: { id: docRef.id, ...data, product_img: url, Filename: Filename } })
                    });
            });
    } catch (error) {
        dispatch(errorproduct(error.message));
    }
}


export const deleteProduct = (data) => async (dispatch) => {
    try {
        const docRef = ref(storage, 'product/' + data.Filename);
        deleteObject(docRef).then(async () => {
            await deleteDoc(doc(db, "product", data.id));
            dispatch({ type: ActionType.DELETE_PRODUCT, payload: data.id })
        }).catch((error) => {
            dispatch(errorproduct(error.message));
        });
    } catch (error) {
        dispatch(errorproduct(error.message));
    }
}



export const updateProduct = (data) => async (dispatch) => {
    console.log(data);
    try {
        const docRef = doc(db, "product", data.id);

        if (typeof data.product_img === "string") {
            await updateDoc(docRef, {
                name: data.name,
                price: data.price,
                quantity: data.quantity,
                discripation: data.discripation,
                product_img: data.product_img,
                Filename: data.Filename
            });
            dispatch({ type: ActionType.UPDATE_PRODUCT, payload: data })
        } else {
            //1
            let Filename = Math.floor(Math.random() * 100000000).toString();
            const docRefDel = ref(storage, 'product/' + data.Filename);
            const docRefIns = ref(storage, 'product/' + Filename)

            deleteObject(docRefDel)
                .then(async () => {
                    uploadBytes(docRefIns, data.product_img)
                        .then(async (snapshot) => {
                            getDownloadURL(snapshot.ref)
                                .then(async (url) => {

                                    await updateDoc(docRef, {
                                        name: data.name,
                                        price: data.price,
                                        quantity: data.quantity,
                                        discripation: data.discripation,
                                        product_img: url,
                                        Filename: Filename
                                    });
                                    dispatch({ type: ActionType.UPDATE_PRODUCT, payload: { ...data, product_img: url, Filename: Filename } })
                                })
                        })
                })

        }


    } catch (error) {
        dispatch(errorproduct(error.message));
    }
}



export const errorproduct = (error) => (dispatch) => {
    dispatch({ type: ActionType.ERROR_PRODUCT, payload: error })
}