
import React, { useState } from 'react';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        alert(`Sign up with Email: ${email} and Password: ${password}`);
    };

    return (
        <div className='login-container'>
            <h2 className='login__text'>Sign Up</h2>
            <form onSubmit={handleSubmit} className='login__form'>
                <div className='login__form_input'>
                    <label className='login__form_input_label'>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='login__form_input'>
                    <label className='login__form_input_label'>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button className='login__form_input_button' type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
