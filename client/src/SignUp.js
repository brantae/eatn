import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'


function SignUp() {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div>
            <p>already have an account? <Link to='/login'>log in!</Link></p>
        </div>
    )
}
export default SignUp