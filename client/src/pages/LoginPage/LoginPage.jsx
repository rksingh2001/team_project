import React from 'react';
import Input from '../../components/Input/Input';
import Logo from '../../components/Logo/Logo';

import "./LoginPage.scss"

const LoginPage = () => {
  return (
    <div className='login-container'>
      <Logo logoUrl="https://picsum.photos/200" label="App name"/>
      <div className="form">
        <h2 className="login-text">Sign in</h2>
        <form>
          <Input name="email" label="Username" type="email" />
          <Input name="password" label="Password" type="password" />
          <button type="submit" className="btn btn-primary">Sign in</button>
          <p style={{marginLeft:"20%", marginTop:"30px"}}>Don't have an account? <a href="/" className='link'>Forget Password?</a></p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;