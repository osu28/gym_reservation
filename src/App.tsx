import React, {useEffect} from 'react';
import './App.css';
import Menu from "./components/Menu"
import "@fontsource/baloo-thambi-2"

function App() {
  useEffect(() => {
    document.title = "Gym Reservation App"
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <div className = "container">
          <br></br>
          <br></br>
          <img src={require("./images/dumbell_icon.png")} className="App-logo" alt="logo" />
          <h1>Gym Reservation App</h1>
          <Menu/>
          {/* <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p> */}

        </div>
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
