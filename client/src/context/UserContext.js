import { createContext } from "react"

const UserContext = React.createContext()

function UserProvider({ children }) {


    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}