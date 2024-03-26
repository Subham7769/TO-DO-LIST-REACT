import React, { useState } from 'react'
import './Header.css'
import logo from './logo.gif'
import SwitchButton from '../Toggler/SwitchButton';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';
import {NavLink} from 'react-router-dom'
import { Button } from '@mui/material';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const Header = () => {
    const isLogin  = useSelector(state=>state.isLoggedIn)
    return (
        <div className='header'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className='itemContainer'>
                {!isLogin &&<NavLink to="/"><div className='chipbtn'>Home</div></NavLink>}
                <NavLink to="/todo"><div className='chipbtn'>My Todo</div></NavLink>
                <Button><SwitchButton /></Button>
                <Button> { isLogin && <PowerSettingsNewRoundedIcon onClick={()=>toast("Logged out Successfully!")}/>}</Button>
               
            </div>
            <ToastContainer autoClose={1000}/>
        </div>
    )
}

export default Header