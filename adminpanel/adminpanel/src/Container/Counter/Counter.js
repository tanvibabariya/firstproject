import React from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { decrement, increment } from '../../redux/action/counter.action';

function Counter(props) {
    const dispatch = useDispatch();
    const c = useSelector((state) => state.counter)

    let handleIncrement=()=>{
      dispatch(increment())
    }

    let handleDecrement=()=>{
        dispatch(decrement())
      }

    return (
        <div>
            <button onClick={()=>handleIncrement()}>+</button>
            <p>{c.counter}</p>
            <button onClick={()=>handleDecrement()}>-</button>
        </div>
    );
}

export default Counter;