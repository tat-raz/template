import React from "react";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">last.<span>fm</span></div>
      <nav className="nav">
        <a href="#">Music</a>
        <a href="#">Charts</a>
        <a href="#">Events</a>
        <a href="#">Features</a>
      </nav>
      <input type="text" className="search" placeholder="Search for music..." />
    </header>
  );
};

export default Header;