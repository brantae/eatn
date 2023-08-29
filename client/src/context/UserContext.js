import { createContext, useState } from "react"

const UserContext = React.createContext()

function UserProvider({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        fetch('/me')
        .then(resp => resp.json())
        .then(data => {
            if (data.error) {
            setIsLoggedIn(false)
            setCurrentUser({})
            } else {
            setIsLoggedIn(true)
            }
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