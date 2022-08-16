import { deletemedicinesData, getAllmaedicinesData, postmedicinesData, updatemedicinesData } from '../../common/axios/medicines.api';
import { BASE_URL } from '../../Share/baseurl';
import * as Actiontype from '../actiontype'


export const getmedicines = () => (dispatch) => {
  try {
    // dispatch(loadingmedicines());
    // setTimeout(function () {
      getAllmaedicinesData()
        .then(data => dispatch(({ type: Actiontype.GET_MEDICINE, payload: data.data })))
        .catch(error => dispatch(errormedicines(error.message)))
      //fetch(BASE_URL + 'medicines')
      //   .then(response => {
      //     if (response.ok) {
      //       return response;
      //     } else {
      //       var error = new Error('Error ' + response.status + ': ' + response.statusText);
      //       error.response = response;
      //       throw error;
      //     }
      //   },
      //     error => {
      //       var errmess = new Error(error.message);
      //       throw errmess;
      //     })
      //   .then(response => response.json())
      //   .then(data => dispatch(({ type: Actiontype.GET_MEDICINE, payload: data })))
      //   .catch(error => dispatch(errormedicines(error.message)))

    // }, 2000)
  } catch (error) {
    console.log(error);
  }
}


export const addmedicines = (data) => (dispatch) => {
  try {
    // dispatch(loadingmedicines());
    // setTimeout(function () {
      postmedicinesData(data)
        .then(data => dispatch(({ type: Actiontype.ADD_MEDICINE, payload: data.data })))
        .catch(error => dispatch(errormedicines(error.message)))

      //   fetch(BASE_URL + 'medicines'
      //     , {
      //       method: 'POST', // or 'PUT'
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //       body: JSON.stringify(data),
      //     })
      //     .then(response => {
      //       if (response.ok) {
      //         return response;
      //       } else {
      //         var error = new Error('Error ' + response.status + ': ' + response.statusText);
      //         error.response = response;
      //         throw error;
      //       }
      //     },
      //       error => {
      //         var errmess = new Error(error.message);
      //         throw errmess;
      //       })
      //     .then(response => response.json())
      //     .then(data => dispatch(({ type: Actiontype.ADD_MEDICINE, payload: data })))
      //     .catch(error => dispatch(errormedicines(error.message)))

    // }, 2000)
  } catch (error) {
    dispatch(errormedicines(error.message))
  }
}


export const deletemedicines = (id) => (dispatch) => {
  try {
    deletemedicinesData(id)
      .then(dispatch(({ type: Actiontype.DELETE_MEDICINE, payload: id })))
      .catch(error => dispatch(errormedicines(error.message)))

    // fetch(BASE_URL + 'medicines/' + id
    //   , {
    //     method: 'DELETE', // or 'PUT'
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   })
    //   .then(response => {
    //     if (response.ok) {
    //       return response;
    //     } else {
    //       var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //       error.response = response;
    //       throw error;
    //     }
    //   },
    //     error => {
    //       var errmess = new Error(error.message);
    //       throw errmess;
    //     })

    //   .then(dispatch(({ type: Actiontype.DELETE_MEDICINE, payload: id })))
    //   .catch(error => dispatch(errormedicines(error.message)))

  } catch (error) {
    dispatch(errormedicines(error.message))
  }
}


export const updatemedicines = (data) => (dispatch) => {
  try {
    updatemedicinesData(data)
      .then(data => dispatch(({ type: Actiontype.UPDATE_MEDICINE, payload: data.data })))
      .catch(error => dispatch(errormedicines(error.message)))
    // fetch(BASE_URL + 'medicines/' + data.id
    //   , {
    //     method: 'PUT', // or 'PUT'
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   })
    //   .then(response => {
    //     if (response.ok) {
    //       return response;
    //     } else {
    //       var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //       error.response = response;
    //       throw error;
    //     }
    //   },
    //     error => {
    //       var errmess = new Error(error.message);
    //       throw errmess;
    //     })
    //   .then(response => response.json())
    //   .then(data => dispatch(({ type: Actiontype.UPDATE_MEDICINE, payload: data })))
    //   .catch(error => dispatch(errormedicines(error.message)))

  } catch (error) {
    dispatch(errormedicines(error.message))
  }
}


export const loadingmedicines = () => (dispatch) => {
  dispatch({ type: Actiontype.LOADING_MEDICINES })
}

export const errormedicines = (error) => (dispatch) => {
  dispatch({ type: Actiontype.ERROR_PATIENTS, payload: error })
}