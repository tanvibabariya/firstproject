import React, { useEffect } from 'react';

function demo(props) {

 const one=()=>{
    return One;
 }

 const two=()=>{
    return Two;
 }

 const three=()=>{
    return Three;
 }
 

 const All = ()=>{
    one();
    two();
    three();
    
 }

 useEffect(()=>{
    All();
 },[])

    return (
        <div>
            
        </div>
    );
}

export default demo;