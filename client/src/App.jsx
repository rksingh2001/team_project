import React from 'react';
import Hello from '../src/components/Component/Hello'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './components/Component/Signup';
import Signin from './components/Component/Signin';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hello/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path='/signin' element={<Signin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;