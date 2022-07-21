import React from 'react';

function Login() {
    return (
        <div className='App'>
            <h1>Pump Program</h1>
            <p>Sign In</p>
            <form>
                <label>
                    Email: 
                    <input type="text" name="email" />
                </label>
                <br></br>
                <br></br>
                <label>
                    Password: 
                    <input type="text" name="password" />
                </label>
                <br></br>
            </form>
        </div>
    );
};

export default Login;