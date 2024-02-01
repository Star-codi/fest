// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
          <NavLink to="/registration" activeClassName="active">Registration</NavLink>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
