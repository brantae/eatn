import { useState, useEffect, useContext } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Login from "./Login"
import SignUp from "./SignUp"
import PostsPage from "./PostsPage"
import NavBar from "./NavBar"
import UserProfile from "./UserProfile"
import { UserContext } from './context/UserContext'
import { PostContext } from "./context/PostContext"
import EditPost from "./EditPost"


function App() {



return (
    <div className="App">
      
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element = {<Login />} />
          <Route exact path="/sign_up" element = {<SignUp />}/>
          <Route exact path="/posts_page" element = {<PostsPage />}/>
          <Route exact path="/profile" element = {<UserProfile />}/>
        </Routes>
        
    </div>
  )
}

export default App
