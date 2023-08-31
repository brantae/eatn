import React, { createContext, useContext, useState, useEffect, } from 'react'

const UserContext = React.createContext()

function UserProvider({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        fetch('/me')
            .then((resp) => {
                if (resp.ok) {
                return resp.json();
                } else {
                throw new Error('User not authenticated')
                }
            })
            .then((data) => {
                setCurrentUser(data)
                setIsLoggedIn(true)
            })
            .catch((error) => {
                
                setIsLoggedIn(false)
            })
        }, [])

    //Login
    function login(currentUser) {
        setCurrentUser(currentUser)
        setIsLoggedIn(true)
    }

//Logout
    function logout() {
        setCurrentUser({})
        setIsLoggedIn(false)
    }

//Signup
    function signup(currentUser) {
        setCurrentUser(currentUser)
        setIsLoggedIn(true)
    }

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, login, logout, signup, isLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }