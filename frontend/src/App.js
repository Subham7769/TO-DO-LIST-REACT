import React, { useEffect } from "react";
import "./styles/App.css";
import TodoComponent from "./components/TodoComponent/TodoComponent";
import LandingPage from "./components/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";

import { IsLoggedIn } from "./Redux/Slices/AuthSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      dispatch(IsLoggedIn());
    }
  }, []);

  return (
    <body>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Todo" element={<TodoComponent />}></Route>
      </Routes>
    </body>
  );
};

export default App;
