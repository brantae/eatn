import React, { useState, useEffect } from "react"
import PostsPage from "./PostsPage"
import UserProfile from "./UserProfile"
import CreatePost from "./CreatePost"

function Home() {
    
    
    
    return (
    <div className="home-page">
        <h1>Home Page</h1> <br></br>
        <h2>Login Modal (in nav) ?</h2>
        <PostsPage />
        <UserProfile />
        <CreatePost />
    </div>
    
    )
}

export default Home