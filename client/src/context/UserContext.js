import React, { createContext, useContext, useState, useEffect } from 'react'

const UserContext = React.createContext()

function UserProvider({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)


    useEffect(() => {
        fetch('/me')
            .then((r) => {
                if (r.ok) {
                r.json().then((user) => {
                    if (user !== null) {
                    setCurrentUser(user)
                    setIsLoggedIn(true)
                    }
                })
                }
            })
            .catch((error) => {
                console.log('Error:', error)
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
        <UserContext.Provider value={{ currentUser, setCurrentUser, login, logout, signup, isLoggedIn, setIsLoggedIn, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }