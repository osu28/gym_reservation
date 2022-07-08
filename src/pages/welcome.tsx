import React from 'react';

const Welcome: React.FC = (): JSX.Element => {
    return (
        <div className='App'>
            <img src={require("../images/dumbell_icon.png")} className="App-logo" alt="logo" />
            <h1>Welcome!</h1>
            <p>How are you doing?</p>
        </div>
    );
};

export default Welcome;