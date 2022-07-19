import './App.css';
import React, { useState } from 'react';
import Single from './pages/Single';

function App() {

  const [page, setPage] = useState('home');
  return (
    <div className="App">
     
    <Single page={page}  />
        
    </div>
  );
}

export default App;
