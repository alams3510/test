import './App.css'
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {

  return (
    <BrowserRouter>
      <CssBaseline/>
      <NavBar/>
      <Box sx={{display:'flex'}}>
      <SideBar/>
      <HomePage/>
      </Box>
    </BrowserRouter>
  );
}

export default App;
