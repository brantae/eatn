import { useState, useEffect, useContext } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Login from "./Login"
import SignUp from "./SignUp"
import PostsPage from "./PostsPage"
import NavBar from "./NavBar"
import UserProfile from "./UserProfile"
import { FlairProvider } from "./context/FlairContext"


function App() {



return (
    <div className="App">
      <FlairProvider>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element = {<Login />} />
          <Route exact path="/sign_up" element = {<SignUp />}/>
          <Route exact path="/feed" element = {<PostsPage />}/>
          <Route exact path="/profile" element = {<UserProfile />}/>
        </Routes>
        </FlairProvider>
    </div>
  )
}

export default App
