import React, { useState } from "react";

export default function Add(){
    const [count, setCount] = useState(0)

    function incrementCount(){
        setCount(prevCount => prevCount + 1)
    }

    function decrementCount(){
        setCount(prevCount => prevCount - 1)
    }

    return (
        <>
        <button onClick={incrementCount}>+</button>
        <span>{count}</span>
        <button onClick={decrementCount}>-</button>
        </>
    )
}