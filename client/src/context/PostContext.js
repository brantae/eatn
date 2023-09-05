import React, { useState, useEffect } from 'react'

const PostContext = React.createContext()

function PostProvider({ children }) {

    const [posts, setPosts] = useState([])


    useEffect(() => {
        fetch('/posts')
            .then((response) => response.json())
            .then((data) => {
            setPosts(data)
            });

    }, [])

    useEffect(() => {
        console.log('Posts state updated:', posts)
    }, [posts])


    return (
        <PostContext.Provider value={{posts, setPosts}}>
            {children}
        </PostContext.Provider>
    )
}

export { PostContext, PostProvider }