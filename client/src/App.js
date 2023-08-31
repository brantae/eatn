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

  const { isLoggedIn, login, logout, setCurrentUser, setIsLoggedIn } = useContext(UserContext)
  

  // useEffect(() => {
  //   fetch('/me')
  //     .then((resp) => {
  //       if (resp.ok) {
  //         return resp.json();
  //       } else {
  //         throw new Error('User not authenticated');
  //       }
  //     })
  //     .then((data) => {
  //       // Handle authenticated user data here
  //       // You can set user data and authentication status here
  //       setIsLoading(false); // Set isLoading to false once done
  //     })
  //     .catch((error) => {
  //       // Handle unauthenticated user here
  //       setIsLoading(false); // Set isLoading to false once done
  //     });
  // }, []);

  // if (isLoading) {
  //   // You can render a loading indicator here if needed
  //   return <div>Loading...</div>;
  // }



  return (
    <div className="App">
      
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element = {<Login />} />
          <Route exact path="/sign_up" element = {<SignUp />}/>
          <Route exact path="/posts" element = {<PostsPage />}/>
          <Route exact path="/profile" element = {<UserProfile />}/>
        </Routes>
        
    </div>
  )
}

export default App
