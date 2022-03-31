import React from 'react';
import Hello from '../src/components/Component/Hello'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hello/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;