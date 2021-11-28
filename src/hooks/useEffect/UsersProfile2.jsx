import React,{ useState, useEffect } from 'react'

function UsersProfile2() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize',handleResize)
        }
    },[])

    // const [windowWidth, setWindowWidth] = useState(window.screen.width)
    // const size =()=> {
    //     setWindowWidth(window.innerWidth)
    // }
    // useEffect(() => {
    //     window.addEventListener('resize',size)
    //     return () => {
    //         window.removeEventListener('resize',size)
    //     }
    // },[]) 

    return (
        <div>{windowWidth}</div>
    )
}

export default UsersProfile2
