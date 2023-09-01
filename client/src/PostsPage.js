import { useState, useEffect, useContext } from 'react'
import { Card, Image, Label } from 'semantic-ui-react'
import PostCard from './PostCard'
import { UserContext } from './context/UserContext'

export default function PostsPage() {
    const [posts, setPosts] = useState([])
    const { isLoggedIn } = useContext(UserContext)

    useEffect(() => {
        if (isLoggedIn) {
        fetch('/posts')
            .then((response) => response.json())
            .then((data) => {
            setPosts(data)
            });
        } else {
        setPosts([])
        }
    }, [isLoggedIn])

    return (
        <div>
        {isLoggedIn ? (
            posts.map((post) => (
            <PostCard
                key={post.id}
                image={post.image}
                caption={post.caption}
                author={post.user_name}
                // flair={post.flair}
            />
            ))
        ) : (
            <p>Please log in to view posts.</p>
        )}
        </div>
    )
    }