import React from 'react';
import { useState } from 'react'
import './App.css';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fontsource/baloo-thambi-2"
import Welcome from './pages/welcome';
import Login from './pages/login';
import NextButton from './components/NextButton';
import Split_Select from './pages/split_select';


function App() {
  // count is the name of the state and setCount changes the state
  const [pageNum, setCount] = useState(0)
  var page;
  var back;
  var next;
  if (pageNum === 0) {
    page = <Welcome/>
    next = <button className="button-19" onClick={() => setCount(pageNum + 1)}>Login</button>
  } else if (pageNum === 1) {
    page = <Login/>
    back = <button className="button-19" onClick={() => setCount(pageNum - 1)}>Cancel</button>
    next = <button className="button-19" onClick={() => setCount(pageNum + 1)}>Login</button>
  } else if (pageNum === 2) {
    page = <Split_Select/>
    back = <button className="button-19" onClick={() => setCount(pageNum - 1)}>Back</button>
    next = <button className="button-19" onClick={() => setCount(pageNum + 1)}>Next</button>
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
          </div>
        </div>
        
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

