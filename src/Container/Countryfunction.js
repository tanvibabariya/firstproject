import React, { useState } from 'react';
import Cityfunction from './Cityfunction';

function Countryfunction(props) {

    const[countryName ,setcountryName]=useState('India')
    const changeCountry =()=>{
        setcountryName ('US')
    }
    return (
        <div>
            <h1>Country function base Component</h1>
            <p>{countryName}</p>
            <button onClick={()=>changeCountry()}>Change country</button>
            <Cityfunction id="101" place_name={countryName === 'India' ? 'Tajmahal'  :  'Statue of Liberty'}/>
        </div>
    );
}

export default Countryfunction;