import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { Form, Button, Checkbox } from 'semantic-ui-react'


function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
        })
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e) => {

    }

    function handleSubmit(event) {
    }

    return (
<div className = 'signup-form'>
        <Form onSubmit={handleSubmit}>
        <Form.Field className="input-field">
                <label>full name</label>
                <input
                type="text"
                placeholder="full name"
                value={formData.name}
                onChange={(e) => setFormData(e.target.value)}
                />
                </Form.Field>
            <Form.Field className="input-field">
                <label>email</label>
                <input
                type="email"
                placeholder="email"
                value={formData.email}
                onChange={(e) => setFormData(e.target.value)}
                />
                </Form.Field>
            <Form.Field className="input-field">
                <label>username</label>
                <input
                type="text"
                placeholder="username"
                value={formData.username}
                onChange={(e) => setFormData(e.target.value)}
                />
            </Form.Field>
        <Form.Field className="input-field">
            <label>password</label>
            <input
                type={showPassword ? 'text' : 'password'}
                placeholder="password"
                value={formData.password}
                onChange={(e) => setFormData(e.target.value)}
                />
                <Form.Field>
            <Checkbox
                label="show password"
                checked={showPassword}
                onChange={() => setShowPassword((prevShowPassword) => !prevShowPassword)}
                />
            </Form.Field>
        </Form.Field>
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