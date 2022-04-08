import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [msgTitle, setmsgTitle] = useState("");
  

  async function getTitle(){
    const response = await fetch('http://localhost:8085/', {mode:'cors'});
    const responseText = await response.text();
     setmsgTitle(responseText);
  };

  useEffect(() => {
    getTitle();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            {msgTitle} + ' In React App'
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
