import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate(); 


    const handleSignIn = () => {
        navigate('/login');
    };
    const handleSignUp = () => {
        navigate('/signup');

    };

    return (
        <div>

            {/* <button className='button' onClick={handleSignIn}>Login</button>
            <button className='button' onClick={handleSignUp}>Signup</button> */}

            Hello, Bro

        </div>
    );
}

export default Home;
