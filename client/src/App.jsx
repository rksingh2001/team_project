import React from 'react';
import Hello from '../src/components/Component/Hello'
import Interests from '../src/components/Component/Interests'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hello/>}/>
        <Route path="/interests" element={<Interests/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;