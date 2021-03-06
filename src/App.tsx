import React from 'react';
import { useState, useEffect } from 'react'
import './App.css';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fontsource/baloo-thambi-2"
import Welcome from './pages/welcome';
import Login from './pages/login';
import NextButton from './components/NextButton';
import Split_Select from './pages/split_select';
import Signup from './pages/signup';


function App() {
  useEffect(() => {
    document.title = "Pump Program"
  }, [])
  // count is the name of the state and setCount changes the state
  const [pageNum, setCount] = useState(0)
  var page;
  var back;
  var next;
  var restart;
  var linkedin = <a
                    className="App-link"
                    href="https://www.linkedin.com/in/oscarsu28/"
                    target="_blank"
                    rel="noopener noreferrer"
                  ><img src={require("./images/linkedin_icon.png")} className='linkedin'></img>
                  </a>
  if (pageNum === 0) {
    page = <Welcome/>
    next = <button className="button-19" onClick={() => setCount(pageNum + 1)}>Login</button>
    back = <button className="button-19" onClick={() => setCount(pageNum - 1)}>SignUp</button>
  } else if (pageNum === -1) {
    page = <Signup/>
    next = <button className="button-19" onClick={() => setCount(0)}>Create Account</button>
  } else if (pageNum === 1) {
    page = <Login/>
    back = <button className="button-19" onClick={() => setCount(pageNum - 1)}>Cancel</button>
    next = <button className="button-19" onClick={() => setCount(pageNum + 1)}>Login</button>
  } else if (pageNum === 2) {
    page = <Split_Select/>
    back = <button className="button-19" onClick={() => setCount(pageNum - 1)}>Back</button>
    next = <button className="button-19" onClick={() => setCount(pageNum + 1)}>Next</button>
  } else {
    restart = <button className="button-19" onClick={() => setCount(0)}>Restart</button>
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className = "container">
          <br></br>
          {page}
          {/* <p>state: {pageNum}</p> */}
          <div className='nav-buttons'>
            {back}
            {next}
            {restart}
          </div>
        </div>
      </header>
      {linkedin}
    </div>
  );
}

export default App;
