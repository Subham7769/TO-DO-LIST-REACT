import { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  LineText,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from './accountContext';
import { TextField } from "@mui/material";
import axios from "axios"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { IsLoggedIn } from  '../../../Redux/Slices/LoginSlice'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

export function LoginForm() {
  const dispatch = useDispatch();
  const isLogin = useSelector(state=>state.isLoggedIn)
  const { switchToSignup } = useContext(AccountContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if email is empty
    if (!email.trim()) {
      setEmailError(true);
      return;
    }

    // Check if password is empty
    if (!password.trim()) {
      setPasswordError(true);
      return;
    }
    await axios.post("http://localhost:8000/api/v1/login", { email, password })
      .then(response => {
        console.log(response);
        console.log(response.data.others._id);
        dispatch(IsLoggedIn(response.data.others._id))
        // toast(response.data.others.username);
        navigate("/todo");
        // Reset form
        setEmail("");
        setPassword("");
        setEmailError(false);
        setPasswordError(false);
      })
      .catch(error => toast(error.response.data.message));

  };

  return (
    <BoxContainer>
      <form onSubmit={handleSubmit}>

        <TextField
          id="email"
          label="email"
          variant="outlined"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(false); // Reset error when user types
          }}
          error={emailError}
          helperText={emailError ? "email is required" : ""}
          style={{ width: "100%", marginBottom: "0.5rem" }}
        />
        <TextField
          id="password"
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(false); // Reset error when user types
          }}
          error={passwordError}
          helperText={passwordError ? "Password is required" : ""}
          style={{ width: "100%", marginBottom: "0.5rem" }}
        />

        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Forget your password?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit">Signin</SubmitButton>
      </form>
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        Don't have an accoun?{" "}
        <BoldLink onClick={switchToSignup} href="#">
          Signup
        </BoldLink>
      </LineText>

    </BoxContainer>
  );
}