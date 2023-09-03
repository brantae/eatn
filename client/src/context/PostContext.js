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


    return (
        <PostContext.Provider value={{posts, setPosts}}>
            {children}
        </PostContext.Provider>
    )
}

export { PostContext, PostProvider }