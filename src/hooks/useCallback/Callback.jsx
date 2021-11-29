import React, {useState, useCallback } from "react";
import List from './List'

export default function Callback(){
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    const getItems = useCallback((increment) => {
        return [number + increment, number + 1 + increment, number + 2 + increment]
    }, [number])

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }

    return (
        <div style={theme}>
            <input
            type ="number"
            value={number}
            onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark(prevDark => !prevDark)}>
            Toggle theme
            </button>
            <List getItems={getItems}/>
        </div>
    )
}