import {  deleteRequest, getRequest, postRequest, updateReuest } from "../request";


export const getAllpatientsData = () =>{
  return getRequest ('patients');
}
 export const postpatientsData = (data) =>{
  return postRequest ('patients' , data);
 }

 export const deletepatientsData =(id)=>{
 return deleteRequest( 'patients/' , id)
 }
 export const updatepatientsData = (data) =>{
  return updateReuest ('patients/' , data);
 }