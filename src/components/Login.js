
import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        alert(`Login with Email: ${email} and Password: ${password}`);
    };

    return (
        <div className='login-container'>
            <h2 className='login__text'>Login</h2>
            <form onSubmit={handleSubmit} className='login__form'>
                <div className='login__form_input'>
                    <label className='login__form_input_label'>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='login__form_input'>
                    <label className='login__form_input_label'>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button className='login__form_input_button' type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
