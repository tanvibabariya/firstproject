import React, { useState } from 'react';

function Cityfunction(props) {

    const[cityName , setcityName]=useState('Surat')
    const  changeCity=()=>{
        setcityName('Ahmedabad')
    }
    return (
        <div>
            <h1>City Function base Component</h1>
            <p>{cityName}</p>
            <button onClick={()=>changeCity()}>Change city</button>
            <p>{props.id}{props.place_name}</p>
            
        </div>
    );
}

export default Cityfunction;