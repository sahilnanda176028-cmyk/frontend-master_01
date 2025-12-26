import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>
        <Link to="/" className="logo-link">EngDing</Link>
      </h2>

      <ul className={menuOpen ? "show menu-open" : "menu-closed"}>

        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link></li>
        <li><Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link></li>
        <li><Link to="/resources" onClick={() => setMenuOpen(false)}>Resources</Link></li>
        <li><Link to="/community" onClick={() => setMenuOpen(false)}>Community</Link></li>
      </ul>

      <div className="nav-buttons">
        <Link to="/login">
          <button type="button">Login</button>
        </Link>
     
         <Link to ="/resources">
         <button type="button" className="bg-primary text-light">
          Start Learning
        </button>
         </Link>
      </div>


      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>   {menuOpen ? "✖" : "☰"}</div>
    </nav>

  );
};

export default Navbar;
