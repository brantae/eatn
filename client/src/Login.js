import { useState } from 'react'
import { Form, Button, Checkbox } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

    function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [showPassword, setShowPassword] = useState(false)

        const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
        }

        const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form data submitted:', formData);
        };

        return (
            
            <div className = 'login-form'> 
            <Form onSubmit={handleSubmit}>
                <Form.Field className="input-field">
                    <label>username</label>
                    <input
                    type="username"
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
            <Button type="submit" primary>log in!</Button>
            <p>haven't made an account? <Link to='/sign_up'>sign up!</Link></p>
            </Form>
            </div>
            
        )
    }

    export default Login;