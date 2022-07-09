import React from 'react';
import { useState } from 'react'

function Split_Select() {
    const [count, setCount] = useState(0)
    return (
        <div className='App'>
            <h1>Select Your Split</h1>
            <div className='split_selector'>
                <button className="button-19">Arms</button>
                <br></br>
                <button className="button-19">Legs</button>
                <br></br>
                <button className="button-19">Chest</button>
                <br></br>
                <button className="button-19">Other</button>
                <br></br>
                <button className="button-19">Other</button>
                <br></br>
                <button className="button-19">Other</button>
                
            </div>
        </div>
    );
};

export default Split_Select;
