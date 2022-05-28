import React from 'react';
import "./SignUpPage.scss";
import googleimg from "../../assets/google.png";
import facebookimg from "../../assets/facebook.png";
import twitterimg from "../../assets/twitter.png";
import 'react-phone-number-input/style.css'

const SignUpPage = () => {
  return (
    <div className="singupPageContainer">
      <p className="signupHeading">Sign Up</p>
      <div className="inputSection">
        <input className="singupPageInput" type="text" placeholder="Username" />
        <input className="singupPageInput" type="tel" placeholder="Mobile Number"/>
        <input className="singupPageInput" type="email" placeholder="Email" />
        <input className="singupPageInput" type="password" placeholder="Create new Password" />
        <input className="singupPageInput" type="password" placeholder="Confirm Password" />

        <button className="sigupButton">Sign up</button>

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

export default SignUpPage;