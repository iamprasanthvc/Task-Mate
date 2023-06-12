import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from "@material-tailwind/react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Features from './components/Features';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/Features' element={<Features />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
