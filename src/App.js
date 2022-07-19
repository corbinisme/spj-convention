import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import NoPage from './pages/NoPage';
import Speakers from './pages/Speakers';
import Travel from './pages/Travel';
import Schedule from './pages/Schedule';
import Covid from './pages/Covid';
import Registration from './pages/Registration';

function App() {
  return (
    <div className="App">
     
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="covid" element={<Covid />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="registration" element={<Registration />} />
          <Route path="travel" element={<Travel />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      </BrowserRouter>
        
        
       
      
      
    </div>
  );
}

export default App;
