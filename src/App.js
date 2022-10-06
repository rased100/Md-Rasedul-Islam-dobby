import * as React from "react";
import './App.css';
import Home from './Pages/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
