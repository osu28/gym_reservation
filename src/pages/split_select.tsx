import React from 'react';
import Menu from "../components/Menu"

const Split_Select: React.FC = (): JSX.Element => {
    return (
        <div className='App'>
            <h1>Select Your Split</h1>
            <div className='split_selector'>
                <button className="button-19">Arms</button>
                <br></br>
                <button className="button-19">Legs</button>
                <br></br>
                <button className="button-19">Chest</button>
            </div>
        </div>
    );
};

export default Split_Select;
