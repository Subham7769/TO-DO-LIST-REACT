import React, { useState } from "react";
import "./Header.css";
import logo from "./logo.gif";
import SwitchButton from "../Toggler/SwitchButton";
import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { logout } from "../../Redux/Slices/AuthSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.AuthSlice.loggedIn);
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="itemContainer">
        {!isLogin && (
          <NavLink to="/">
            <div className="chipbtn">Home</div>
          </NavLink>
        )}
        {isLogin && (
          <NavLink to="/todo">
            <div className="chipbtn">My Todo</div>
          </NavLink>
        )}
        <Button>
          <SwitchButton />
        </Button>
        <Button>
          {" "}
          {isLogin && (
            <PowerSettingsNewRoundedIcon
              onClick={() => {
                sessionStorage.clear("id");
                dispatch(logout());
                navigate("/");
                toast("Logged out Successfully!");
              }}
            />
          )}
        </Button>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default Header;
