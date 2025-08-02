import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">JalanTerus.id</div>

      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/About">Tentang</Link>
        <Link to="/Packeges">Paket Wisata</Link>
        <Link to="/Gallery">Galeri</Link>
      </div>

      <div className="navbar-contact">
        <a href="https://wa.me/6281910901574" target="_blank" rel="noreferrer">
          Contact
        </a>
      </div>

      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}
