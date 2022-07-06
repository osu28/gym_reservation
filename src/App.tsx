import React, {useEffect} from 'react';
import './App.css';
import Menu from "./components/Menu"

function App() {
  useEffect(() => {
    document.title = "Gym Reservation App"
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./images/dumbell_icon.png")} className="App-logo" alt="logo" />
        <h1>Gym Reservation App</h1>
        <Menu/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/oscarsu28/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oscar Su
        </a>
      </header>
    </div>
  );
}

export default App;
