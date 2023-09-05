import { useState, useEffect, useContext } from 'react'
import PostCard from './PostCard'
import { UserContext } from './context/UserContext'
import { PostContext } from './context/PostContext'

export default function PostsPage() {
    
    const { isLoggedIn } = useContext(UserContext)
    const { posts, setPosts } = useContext(PostContext)

    const updatePosts = (updatedPost) => {
        const updatedPosts = posts.map((p) => (p.id === updatedPost.id ? updatedPost : p))
        setPosts(updatedPosts)
        console.log(updatedPosts)
    }

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
                post={post}
                updatePosts={updatePosts}
            />
            ))
        ) : (
            <p>Please log in to view posts.</p>
        )}
        </div>
    )
    }