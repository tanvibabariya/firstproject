import {  deleteRequest, getRequest, postRequest, updateReuest } from "../request";


export const getAllmaedicinesData = () =>{
  return getRequest ('medicines');
}
 export const postmedicinesData = (data) =>{
  return postRequest ('medicines' , data);
 }

 export const deletemedicinesData =(id)=>{
 return deleteRequest( 'medicines/' , id)
 }
 export const updatemedicinesData = (data) =>{
  return updateReuest ('medicines/' , data);
 }