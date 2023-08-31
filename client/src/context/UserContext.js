import React, { createContext, useContext, useState, useEffect } from 'react'

const UserContext = React.createContext()

function UserProvider({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     fetch('/me')
    //     .then(resp => resp.json())
    //     .then(data => {
    //         console.log(data)
    //         console.log(currentUser)
    //         if (data.error) {
    //         setIsLoggedIn(false)
    //         setCurrentUser({})
    //         } else {
    //         setIsLoggedIn(true)
    //     }
    //     }) 
    // }, [])

        useEffect(() => {
            fetch('/me')
            .then((resp) => {
                if (resp.ok) {
                return resp.json()
                } else {
                throw new Error('User not authenticated')
                }
            })
            .then((data) => {
                login(data)
                setIsLoading(false)
            })
            .catch((error) => {
                logout()
                setIsLoading(false)
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