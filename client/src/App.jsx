import React from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SingUpPage from './pages/SignUpPage/SignUpPage';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SingUpPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;