import './App.css';
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"
import Petitioners from "./components/Petitioners"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/Petitioners" element={<Petitioners/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;