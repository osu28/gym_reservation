import React from 'react';

function Login() {
    return (
        <div className='App'>
            <h1>Pump Program</h1>
            <p>Sign In</p>
            <form>
                <label>
                    Email:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Login;