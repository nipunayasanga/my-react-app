import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/login";
import Home from "./screens/Home";
import Registration from "./screens/Registration";


function App() {
  return (

    <BrowserRouter>
    <Routes>

    <Route path="/" element ={<Login/>}/>
    <Route path="Home" element ={<Home/>}/>
    <Route path="Registration" element ={<Registration/>}/>


    </Routes>
    </BrowserRouter>

  );
}

export default App;
