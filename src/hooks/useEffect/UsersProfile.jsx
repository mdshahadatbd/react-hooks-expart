import React,{ useState, useEffect } from 'react'

function UsersProfile() {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])

    // useEffect (() => {
    //     console.log('render')
    // },[resourceType])

    useEffect (() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    },[resourceType])

    return (
        <>
        <div>
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('users')}>Users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        {items.map(item => {
            return <pre>{JSON.stringify(item)}</pre>
        })}
        </>
    )
}

export default UsersProfile
