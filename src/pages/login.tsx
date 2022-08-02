import { TextField } from '@mui/material';
import React from 'react';

function Login() {
    return (
        <div className='App'>
            <h1>Pump Program</h1>
            <p>Sign In</p>
            <TextField 
                sx={{
                    width: 400,
                    input: { color: 'white' },
                }}
                fullWidth id="email" 
                label="Email" 
                variant="filled" 
                focused 
            />
            <br></br>
            <br></br>
            <br></br>
            <TextField 
                sx={{
                    width: 400,
                    input: { color: 'white' },
                }}
                type="password"
                fullWidth id="password" 
                label="Password" 
                variant="filled" 
                focused 
            />
        </div>
    );
};

export default Login;