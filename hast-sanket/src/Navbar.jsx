
import React, { useState } from "react";
import "./App.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar">
      <div className="nav-container">
        <h1 className="logo">HastSanket</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
         <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#problem" onClick={() => setMenuOpen(false)}>Problem</a>
          <a href="#solution" onClick={() => setMenuOpen(false)}>Solution</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it Works</a>
          <a href="#demo" onClick={() => setMenuOpen(false)}>Demo</a>
          <a href="#team" onClick={() => setMenuOpen(false)}>Team</a>
        </nav>
        
      </div>
    </header>
  );
}

export default Navbar;
