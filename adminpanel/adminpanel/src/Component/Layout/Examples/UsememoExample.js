import { TextField } from '@mui/material';
import React, { useState } from 'react';

function UsememoExample(props) {
    const [counter, setCounter]=useState(0);
    const [number , setNumber]=useState(0);

    const findFectorial = (n) =>{
        if (n>1) {
           return n * findFectorial(n-1)
        }
        else{
           return 1;
        }   
    }
    const result = findFectorial(number);
    return (
        <div>
            
            <TextField
            onChange={(e)=>setNumber(e.target.value)}
            />
            <br/>
         <button onClick={()=>setCounter(counter+1)}>Counter</button>
         <p>Counter:{counter}</p>

         <p>Fectorial :{result}</p>
        </div>
    );
}

export default UsememoExample;