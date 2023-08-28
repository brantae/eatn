import { useState, useEffect, useContext } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Login from "./Login"
import SignUp from "./SignUp"
import PostsPage from "./PostsPage"
import NavBar from "./NavBar"


function App() {


  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element = {<Login />} />
          <Route exact path="/sign_up" element = {<SignUp />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
