import "./styles.css";
import styled from "styled-components";
import AccountBox from "./accountBox";

const LoginSignupContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <LoginSignupContainer>
      <AccountBox />
    </LoginSignupContainer>
  );
};

export default App;
