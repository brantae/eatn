import { useState, useEffect, useContext } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Login from "./Login"
import SignUp from "./SignUp"
import PostsPage from "./PostsPage"
import NavBar from "./NavBar"
import UserProfile from "./UserProfile"
import { UserProvider } from './context/UserContext'


function App() {


  return (
    <div className="App">
      <UserProvider>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element = {<Login />} />
          <Route exact path="/sign_up" element = {<SignUp />}/>
          <Route exact path="/posts" element = {<PostsPage />}/>
          <Route exact path="/profile" element = {<UserProfile />}/>
        </Routes>
        </UserProvider>
    </div>
  )
}

export default App
