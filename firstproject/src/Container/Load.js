import React from 'react';

function Load(Component) {
   
    return  function LoadData({isload,data}){
        if(isload){
            return(
             <h1>Loading...</h1>
            )
         }
         else{
             return(
                 <Component data={data}/>
             )
           
         }
    }  
}

export default Load;