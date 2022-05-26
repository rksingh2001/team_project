import React from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from "./pages/LoginPage/LoginPage"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.scss"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="login" element={< LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;