import React, { useEffect, useState } from "react";
 
export default function Counter(){
const [count, setCounter] = useState(0);

useEffect(()=>{
    document.title=`Count: ${count}`;
},[count]);

const increment = () =>{
    setCounter((prevCount)=> prevCount +1);

}
const decrement = () =>{
    if(count>0){
        setCounter((prevCount)=> prevCount-1);
    }
    
}

    return(
        <>
<h1> Simple Counter App</h1>
<h3> Count: {count} </h3>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>


        </>
    )
}