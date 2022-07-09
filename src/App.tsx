import React from 'react';
import { useState } from 'react'
import './App.css';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from './pages/welcome';
import "@fontsource/baloo-thambi-2"
import NextButton from './components/NextButton';
import Split_Select from './pages/split_select';


function App() {
  // count is the name of the state and setCount changes the state
  const [count, setCount] = useState(0)
  var page;
  if (count === 0) {
    page = <Welcome/>
  } else if (count === 1) {
    page = <Split_Select/>
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className = "container">
          <br></br>
          {page}
          <button onClick={() => setCount(count - 1)}>
            Back
          </button>
          <button onClick={() => setCount(count + 1)}>
            Next
          </button>
          
          <p>state: {count}</p>
          <br></br>
          <br></br>
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

