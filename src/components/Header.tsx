import React from "react";
import "../styles/Header.css";

interface NavItem {
  title: string;
  url: string;
}

interface HeaderProps {
  navItems: NavItem[];
}

const Header: React.FC<HeaderProps> = ({ navItems }) => (
  <header className="header" role="banner">
    <nav className="header__nav" aria-label="Основная навигация">
      <ul className="nav-list">
        {navItems.map((item: NavItem, index: number) => (
          <li key={index} className="nav-list__item">
            <a href={item.url} className="nav-link">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
