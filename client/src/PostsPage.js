import { useState, useEffect, useContext } from 'react'
import PostCard from './PostCard'
import { UserContext } from './context/UserContext'
import { PostContext } from './context/PostContext'

export default function PostsPage() {
    
    const { isLoggedIn } = useContext(UserContext)
    const { posts } = useContext(PostContext)

    console.log(posts)

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