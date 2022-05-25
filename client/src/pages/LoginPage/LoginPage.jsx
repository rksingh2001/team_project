import React from 'react';
import "./LoginPage.scss";
import googleimg from "../../assets/google.png";
import facebookimg from "../../assets/facebook.png";
import twitterimg from "../../assets/twitter.png";

const LoginPage = () => {
  return (
    <div className="loginPageContainer">
      <div className="loginPageHeader">
        <img className="loginPageImage" src="https://play-lh.googleusercontent.com/fVt7kWGDBeoRKqlNhIsOeS_blWjwoHvpHpnRTNohalWWeuuWptVeNpiqxVldpGunmls"  alt=""/>
        <h4 className="loginPageHeading">App name</h4>
      </div>

      <h5 className="siginText">Sign in</h5>

      <div className="inputSection">
        <input className="loginPageInput" type="text" placeholder="Username" />
        <input className="loginPageInput" type="text" placeholder="Password" />

        <button className="siginButton">Sign in</button>

        <p className="concernMessage">Don't have an account? <span> Create one</span></p>
        <button className="endButton">Or login with</button>       
      </div>

      <div className="socialIconsContainer">
          <img className="socialIcons" src={googleimg} alt="google" />
          <img className="socialIcons" src={facebookimg} alt="facebook" />
          <img className="socialIcons" src={twitterimg} alt="twitter" />
        </div>
    </div>
  )
}

export default LoginPage;