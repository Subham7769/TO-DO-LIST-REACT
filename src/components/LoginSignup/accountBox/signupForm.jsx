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

export function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = () => {
    // Check if product name is empty
    if (!name.trim()) {
      setNameError(true);
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


    // Reset form
    setName("");
    setEmail("");
    setPassword("");
    setNameError(false);
    setEmailError(false);
    setPasswordError(false);
  };

  const { switchToSignin } = useContext(AccountContext);
  return (
    <BoxContainer>
      <form onSubmit={handleSubmit} >    
        <TextField
          id="name"
          label="Full Name"
          variant="outlined"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setNameError(false); // Reset error when user types
          }}
          error={nameError}
          helperText={nameError ? "Username is required" : ""}
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
        </form>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        Already have an account?{" "}
        <BoldLink onClick={switchToSignin} href="#">
          Signin
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}