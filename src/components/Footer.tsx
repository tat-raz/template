import React from "react";
import "../styles/Footer.css";

interface FooterProps {
  copyText: string;
}

const Footer: React.FC<FooterProps> = ({ copyText }) => (
  <footer className="app-footer" role="contentinfo">
    <div className="footer-content">
      <p className="copyright">
        &copy; {new Date().getFullYear()} {copyText}
      </p>
    </div>
  </footer>
);

export default Footer;
