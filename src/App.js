import * as React from "react";
import './App.css';
import Home from './Pages/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar';
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
