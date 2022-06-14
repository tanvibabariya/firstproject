import React, { useEffect, useState } from 'react';

function Timefunction(props) {
    const[time , setTime]=useState(new Date());
    const[data , setData]=useState([]);

    const tick = () =>{
        setTime(new Date());
    }

    useEffect(()=>{

        const timeE = setInterval(()=>tick() , 1000);

        return()=>{
            clearInterval(timeE)
        }

    },[time]);

    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Timefunction;