import React from "react";
import './LandingPage.css';
import LoginSignupContainer from '../LoginSignup/LoginSignupContainer'
import Header from '../Header/Header'

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="landingPage">
        <div className="intro">
            <p>TO DO</p>
            <p>List</p>
        </div>
        <div className="lsDiv">
          <LoginSignupContainer />
        </div>
      </div>
    </>
  )
}

export default LandingPage
