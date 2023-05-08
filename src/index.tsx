
import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals.tsx';
import './index.css'
import About from './Components/About.tsx';
import NavBar from './Components/Header.tsx';
import Project from './Components/Project.tsx';
import theme from './Theme.tsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
      <div>
        <NavBar />
        <About />
        <Project />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
 
reportWebVitals();
