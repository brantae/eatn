import { useState } from 'react'
import { Link } from 'react-router-dom'

    function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

        const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        };

        const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form data submitted:', formData);
        };

        return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Email:</label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                />
            </div>
            <button type="submit">Login</button>
            </form>
            <p>haven't made an account? <Link to='/sign_up'>sign up!</Link></p>
        </div>
        );
    }

    export default Login;