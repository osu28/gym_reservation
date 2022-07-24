import React from 'react';
import { TextField } from '@mui/material';


function Signup() {
    return (
        <div className='App'>
            <h1>Pump Program</h1>
            <p>Sign Up</p>
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
            <TextField 
                sx={{
                    width: 400,
                    input: { color: 'white' },
                    color: 'white'
                }}
                fullWidth id="password" 
                label="Password" 
                variant="filled" 
                focused 
            />
            <br></br>
            <br></br>
            <TextField 
                sx={{
                    width: 400,
                    input: { color: 'white' },
                }}
                fullWidth id="confirm_password" 
                label="Confirm Password" 
                variant="filled" 
                focused 
            />
        </div>
    );
};

export default Signup;