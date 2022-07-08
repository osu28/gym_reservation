import React from 'react';

const Welcome: React.FC = (): JSX.Element => {
    return (
        <div className='App'>
            {/* <header className="App-header"> */}
                <img src={require("../images/dumbell_icon.png")} className="App-logo" alt="logo" />
                <h1>Welcome!</h1>
            {/* </header> */}
        </div>
    );
};

export default Welcome;