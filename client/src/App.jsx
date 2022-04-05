import React from 'react';
import Hello from '../src/components/Component/Hello'
import LandingPage from './pages/LandingPage/LandingPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;