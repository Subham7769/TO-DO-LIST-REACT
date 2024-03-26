import React from "react";
import './styles/App.css'; 
import TodoComponent from "./components/TodoComponent/TodoComponent"
import LandingPage from "./components/LandingPage/LandingPage";
import { Routes,Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './Redux/Store'

const App = () => {
  return (
    <Provider store={store}>
    <body>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/Todo" element={<TodoComponent/>}></Route>       
      </Routes>
    </body>
    </Provider>
  )
}

export default App
