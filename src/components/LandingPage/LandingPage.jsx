import React from "react";
import './LandingPage.css'; 
import LoginSignupContainer from '../LoginSignup/LoginSignupContainer'
import task from './task.gif'


const LandingPage = () => {
  return (
    <div className="landingPage">
        <div className="intro">
            <div className="textBoxTodo">
               <p>TO DO</p>
                <p>List</p>  
            </div>
           <div>
                <img src={task} alt="" />
           </div>
        </div>
        <div className="lsDiv">
            <LoginSignupContainer/>
        </div>
    </div>
  )
}

export default LandingPage
