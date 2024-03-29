import  { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  LineText,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from './accountContext';
import { TextField } from "@mui/material";
import axios from "axios"
import { toast} from 'react-toastify';

export function SignupForm() {
  const { switchToSignin } = useContext(AccountContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if product name is empty
    if (!username.trim()) {
      setUserNameError(true);
      return;
    }

    // Check if HS code is empty
    if (!email.trim()) {
      setEmailError(true);
      return;
    }

    // Check if HS code is empty
    if (!password.trim()) {
      setPasswordError(true);
      return;
    }
    // console.log(username,email,password)
    await axios.post(`${window.location.origin}/api/v1/register`,{username:username,email:email,password:password})
    .then(response=>{
      // console.log(response)
      toast(response.data.message)
      // Reset form
      setUsername("");
      setEmail("");
      setPassword("");
      setUserNameError(false);
      setEmailError(false);
      setPasswordError(false);
    }
    ).catch(error=>toast(error.response.data.message))

  };

  return (
    <BoxContainer>
      <form onSubmit={handleSubmit} >    
        <TextField
          id="name"
          type="text"
          label="Full Name"
          variant="outlined"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setUserNameError(false); // Reset error when user types
          }}
          error={userNameError}
          helperText={userNameError ? "Username is required" : ""}
          style={{ width: "100%",marginBottom:"0.5rem" }}
        />
        <TextField
          id="email"
          type="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(false); // Reset error when user types
          }}
          error={emailError}
          helperText={emailError ? "Email is required" : ""}
          style={{ width: "100%",marginBottom:"0.5rem" }}
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
          style={{ width: "100%",marginBottom:"0.5rem" }}
        />
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="5px" />
        </form>
      <LineText>
        Already have an account?{" "}
        <BoldLink onClick={switchToSignin} href="#">
          Signin
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}