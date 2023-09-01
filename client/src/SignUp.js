import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useContext, useState } from "react"
import { Form, Button, Checkbox } from 'semantic-ui-react'
import { UserContext } from "./context/UserContext"


function SignUp() {

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
        })
    const [showPassword, setShowPassword] = useState(false)
    const [errorsList, setErrorsList] = useState([])

    const navigate = useNavigate()

    const { signup } = useContext(UserContext)

    function handleChange(event) {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch('/sign_up', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
            credentials: 'include',
        })
        .then(res => res.json())
        .then(user => {
            if (!user.errors) {
                signup(user)
                navigate('/')
            } else {
                setFormData({
                    ...formData,
                    password: '',
                    })
                const errorList = user.errors.map(e => <li>{e}</li>)
                setErrorsList(errorList)
            }
        })
        
    }

    return (
<div className = 'signup-form'>
        <Form onSubmit={handleSubmit}>
        <Form.Field className="input-field">
                <label>full name</label>
                <input
                type="text"
                name="name"
                placeholder="full name"
                value={formData.name}
                onChange={handleChange}
                />
                </Form.Field>
            <Form.Field className="input-field">
                <label>email</label>
                <input
                type="email"
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                />
                </Form.Field>
            <Form.Field className="input-field">
                <label>username</label>
                <input
                type="text"
                name="username"
                placeholder="username"
                value={formData.username}
                onChange={handleChange}
                />
            </Form.Field>
        <Form.Field className="input-field">
            <label>password</label>
            <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
                />
                <Form.Field>
            <Checkbox
                label="show password"
                checked={showPassword}
                onChange={() => setShowPassword((prevShowPassword) => !prevShowPassword)}
                />
            </Form.Field>
        </Form.Field>
        {errorsList.length > 0 && (
        <ul style={{ color: 'red' }}>{errorsList}</ul>)}
            <Button 
            type="submit"
            primary 
                >sign up!</Button>
                <p>already have an account? <Link to='/login'>log in!</Link></p>
        </Form>
        </div>
    )
}
export default SignUp