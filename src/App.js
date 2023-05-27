import React from 'react';
import * as dotenv from "dotenv";
import './App.css';
import AppBody from './components/AppBody';

dotenv.config()



function App() {
  return (
    <div className="App">
      <h1 className='App-header'>RoastChatGPT</h1>
      <AppBody />
    </div>
  );
}

export default App;


