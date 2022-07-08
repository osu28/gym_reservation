import React from 'react';
import { useState } from 'react'
import './App.css';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from './pages/welcome';
import "@fontsource/baloo-thambi-2"
import NextButton from './components/NextButton';


function App() {
  const [state, setState] = useState('start')
  return (
    <div className="App">
      <header className="App-header">
        <div className = "container">
          <br></br>
          {state === 'start' && (
            <NextButton addTrip={() => setState('add-trip') } />
          )}
          {state === 'add-trip' && <Welcome />}
        </div>
       
        {/* <BrowserRouter>
          <Routes>
            <Route path='/welcome' element={Welcome}/>
          </Routes>
        </BrowserRouter> */}


        <br></br>
        <a
            className="App-link"
            href="https://www.linkedin.com/in/oscarsu28/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require("./images/linkedin_icon.png")} style={{width:"40px",height:"40",}}>
            </img>
          </a>
      </header>
    </div>
  );
}

export default App;

// function showTable(): React.MouseEventHandler<HTMLButtonElement> | undefined {
//   throw new Error('Function not implemented.');
// }

