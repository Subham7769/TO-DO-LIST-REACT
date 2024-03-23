import React from "react";
import './styles/App.css'; 
import Header from "./components/Header/Header"
import LandingPage from "./components/LandingPage/LandingPage";
import { Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <body>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/Todo" element={<Header/>}></Route>       
      </Routes>
    </body>
  )
}

export default App
