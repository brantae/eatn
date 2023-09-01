import { useState, useEffect, useContext } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Login from "./Login"
import SignUp from "./SignUp"
import PostsPage from "./PostsPage"
import NavBar from "./NavBar"
import UserProfile from "./UserProfile"
import { UserProvider, UserContext } from './context/UserContext'


function App() {

  const [posts, setPosts] = useState([])
  const [flairs, setFlairs] = useState([])

  const { isLoggedIn, login, logout, setCurrentUser, setIsLoggedIn } = useContext(UserContext)

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
    <div className="App">
      
      <NavBar posts={posts} setPosts={setPosts}/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element = {<Login />} />
          <Route exact path="/sign_up" element = {<SignUp />}/>
          <Route exact path="/posts_page" element = {<PostsPage posts={posts}/>}/>
          <Route exact path="/profile" element = {<UserProfile />}/>
        </Routes>
        
    </div>
  )
}

export default App
