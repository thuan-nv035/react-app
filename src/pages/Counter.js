import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
    const count = useSelector(state => state.counter.count) // trich xuat state count tu count reducer
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Counter</h1>
            <p>
                {count}
            </p>
            <duv>
                <button onClick={() => dispatch({type: 'counter/increment', payload: {step: 10}})}>+</button>
                <button onClick={() => dispatch({type: 'counter/decrement', payload: {step: 1}})}>-</button>
            </duv>
        </div>
    );
};

export default Counter;