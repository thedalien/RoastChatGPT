import React from 'react';
import * as dotenv from "dotenv";
import './App.css';
import AppBody from './components/AppBody';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

dotenv.config()

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <div className="App-header">
        <h1>Roast Chat</h1>
      </div>
      <AppBody />
    </ThemeProvider>
  );
}

export default App;


