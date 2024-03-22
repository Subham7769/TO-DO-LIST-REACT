import  { useContext, useState } from "react";
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



export function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { switchToSignup } = useContext(AccountContext);
  
  const handleSubmit = () => {
    // Check if product name is empty
    if (!userName.trim()) {
      setUserNameError(true);
      return;
    }

    // Check if HS code is empty
    if (!password.trim()) {
      setPasswordError(true);
      return;
    }


    // Reset form
    setUserName("");
    setPassword("");
    setUserNameError(false);
    setPasswordError(false);
  };

  return (
    <BoxContainer>
      <form onSubmit={handleSubmit} >
        
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              setUserNameError(false); // Reset error when user types
            }}
            error={userNameError}
            helperText={userNameError ? "Username is required" : ""}
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
      </form>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Signin</SubmitButton>
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