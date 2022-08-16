import React, { useCallback, useState } from 'react';
import Listitem from './Listitem';

function UsecallBackExample(props) {
    const [theme, setTheme] = useState(false);
    const [number, setNumber] = useState(0)


    const themestyle = {
        backgroundColor: theme ? '#fff' : ' #000',
        color: theme ? '#000' : '#fff'
    }


    const getItem = useCallback(
        (inc) => {
        return [number, number + inc, number + inc + 5]
    }, [number]);


    return (
        <div style={themestyle}>
            <button onClick={() => { setTheme(!theme) }}>Theme</button><br />
            <input placeholder='Enter any number' onChange={(e) => setNumber(parseInt(e.target.value))} />

            <Listitem getItem={getItem} />
        </div>
    );
}

export default UsecallBackExample;