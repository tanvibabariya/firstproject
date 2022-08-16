import { deletepatientsData, getAllpatientsData, postpatientsData, updatepatientsData } from '../../common/axios/patients.api';
import { BASE_URL } from '../../Share/baseurl';
import * as Actiontype from '../actiontype'


export const getpatients = () => (dispatch) => {
  try {
    dispatch(loadingpatients());
   
    setTimeout(function () {
      getAllpatientsData()
      .then(data => dispatch(({ type: Actiontype.GET_PATIENTS, payload: data.data })))
      .catch(error => dispatch(errorpatients(error.message)))
    //     fetch(BASE_URL + 'patients')
    //         .then(response => {
    //             if (response.ok) {
    //                 return response;
    //             } else {
    //                 var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //                 error.response = response;
    //                 throw error;
    //             }
    //         },
    //             error => {
    //                 var errmess = new Error(error.message);
    //                 throw errmess;
    //             })
    //         .then(response => response.json())
    //         .then(data => dispatch(({ type: Actiontype.GET_PATIENTS, payload: data })))
    //         .catch(error => dispatch(errorpatients(error.message)))

    }, 2000)
  } catch (error) {
    dispatch(errorpatients(error.message))

  }
}


export const addpatients = (data) => (dispatch) => {
  // dispatch(loadingpatients());
  try {
    postpatientsData(data)
      .then(data => dispatch(({ type: Actiontype.ADD_PATIENTS, payload: data.data })))
      .catch(error => dispatch(errorpatients(error.message)))
    // setTimeout(function () {

    //   fetch(BASE_URL + 'patients'
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
    //     .then(data => dispatch(({ type: Actiontype.ADD_PATIENTS, payload: data })))
    //     .catch(error => dispatch(errorpatients(error.message)))
    // }, 2000)
  } catch (error) {
    dispatch(errorpatients(error.message))
  }
}

export const deletepatients = (id) => (dispatch) => {
  try {
    deletepatientsData(id)
      .then(dispatch(({ type: Actiontype.DELETE_PATIENTS, payload: id })))
      .catch(error => dispatch(errorpatients(error.message)))
    // fetch(BASE_URL + 'patients/' + id
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

    //   .then(dispatch(({ type: Actiontype.DELETE_PATIENTS, payload: id })))
    //   .catch(error => dispatch(errorpatients(error.message)))

  } catch (error) {
    dispatch(errorpatients(error.message))
  }

}


export const updatepatients = (data) => (dispatch) => {
  try {
    updatepatientsData(data)

    .then(data => dispatch(({ type: Actiontype.UPDATE_PATIENTS, payload: data })))
  .catch(error => dispatch(errorpatients(error.message)))
    // fetch(BASE_URL + 'patients/' + data.id
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
    //   .then(data => dispatch(({ type: Actiontype.UPDATE_PATIENTS, payload: data })))
    //   .catch(error => dispatch(errorpatients(error.message)))

  } catch (error) {
  dispatch(errorpatients(error.message))
}
}
export const loadingpatients = () => (dispatch) => {
  dispatch({ type: Actiontype.LOADING_PATIENTS })
}

export const errorpatients = (error) => (dispatch) => {
  dispatch({ type: Actiontype.ERROR_PATIENTS, payload: error })
}