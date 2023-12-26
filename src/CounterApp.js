import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, selectCount } from "./redux/counterSlice";

const CounterApp = () =>{
    const dispatch = useDispatch();
    const count = useSelector(selectCount);

    return(
        <>
        <h1>Redux Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
    )
}

export default CounterApp;