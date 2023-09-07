import { useContext, useState } from 'react'
import { Form, Button, Checkbox } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { UserContext } from "./context/UserContext"
import { useNavigate } from "react-router-dom"
import { Helmet } from 'react-helmet';

    function Login() {

    //state
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState([])

    //context
    const { login } = useContext(UserContext)
    const navigate = useNavigate()



    function handleSubmit(event) {
        event.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                username: username, 
                password: password }),
                credentials: 'include',
        })
        .then((resp) => {
            if (resp.ok) {
                resp.json().then((userData) => {
                    login(userData)})
                navigate("/feed")
            } else {
                resp.json().then((errorData) => setErrors(errorData.errors))
            }
        })
            
        }

        return (
            
        <div className = 'login-form'> 
                <Helmet>
            <title>login</title>
        </Helmet>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>username</label>
                    <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Field>
            <Form.Field>
                <label>password</label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Field>
                <Checkbox
                    label="show password"
                    checked={showPassword}
                    onChange={() => setShowPassword((prevShowPassword) => !prevShowPassword)}
                    />
                </Form.Field>
            </Form.Field>
            {errors.length > 0 && (
                <ul style={{ color: "red" }}>
                    {errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            )}
            <Button type="submit" primary>log in!</Button>
            <p>haven't made an account? <Link to='/sign_up'>sign up!</Link></p>
            </Form>
            </div>
            
        )
    }

    export default Login;