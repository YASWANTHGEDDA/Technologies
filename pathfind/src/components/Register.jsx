import React, { useState } from 'react';
import axios from 'axios'; // Ensure you have axios installed
import './authstyl.css'; // Make sure this CSS file is properly set up
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate password confirmation
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Create a user object
        const user = {
            username,
            email,
            password,
            phoneNumber,
        };

        try {
            // Send POST request to backend
            await axios.post('http://localhost:5000/register', user);
            alert('Registration successful!');
            // Redirect to login or home page after successful registration
            navigate('/login'); // Uncomment if using react-router
        } catch (error) {
            alert('Registration failed: ' + error.message);
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit} className="auth-form">
                <h2>Register</h2>
                <div className="input-group">
                    <label className="label">Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input"
                        required
                    />
                </div>
                <div className="input-group">
                    <label className="label">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input"
                        required
                    />
                </div>
                <div className="input-group">
                    <label className="label">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        required
                    />
                </div>
                <div className="input-group">
                    <label className="label">Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="input"
                        required
                    />
                </div>
                <div className="input-group">
                    <label className="label">Phone Number:</label>
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="input"
                        required
                    />
                </div>
                <button type="submit" className="button">Register</button>
            </form>
        </div>
    );
};

export default Register;