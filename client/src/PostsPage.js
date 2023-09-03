import { useState, useEffect, useContext } from 'react'
import PostCard from './PostCard'
import { UserContext } from './context/UserContext'

export default function PostsPage({posts}) {
    
    const { isLoggedIn } = useContext(UserContext)



    return (
        <div>
        {isLoggedIn ? (
            posts.map((post) => (

            <PostCard
                key={post.id}
                image={post.image}
                caption={post.caption}
                author={post.user_name}
                flair={post.flairs}
            />
            ))
        ) : (
            <p>Please log in to view posts.</p>
        )}
        </div>
    )
    }