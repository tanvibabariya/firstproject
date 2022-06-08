import React, { useEffect, useState } from 'react';

function Counter(props) {
    const [counter, setcounter] = useState(0);
 
    const Increment=()=>{
        if(counter<10){
            
            setcounter(counter+1)
        }
     }
    
    const Decrement=()=>{
        if(counter>0){
            
            setcounter(counter-1)
        }
     }
    return (
        <div>
            <h1>Counter</h1>
            <button onClick={() =>Increment()}>+</button>
            <h3>{counter}</h3>
            <button onClick={() =>Decrement()}>-</button>
        </div>
    );
}

export default Counter;