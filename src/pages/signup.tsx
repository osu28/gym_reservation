import React from 'react';

function Signup() {
    return (
        <div className='App'>
            <h1>Pump Program</h1>
            <p>Sign Up</p>
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
                <label>
                    Confirm Password: 
                    <input type="text" name="confirmpassword" />
                </label>
                <br></br>
            </form>
        </div>
    );
};

export default Signup;