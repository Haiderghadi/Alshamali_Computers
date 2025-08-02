import { useState } from "react";
import "../../styles/Navbar.css";

const Links = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="main-nav">
      <div className="navbar-container">
        <input
          type="checkbox"
          id="menu-toggle"
          className="menu-toggle"
          checked={menuOpen}
          onChange={toggleMenu}
        />

        <label htmlFor="menu-toggle" className="menu-icon">
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </label>

        <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link`}
                href="#"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link `}
                href="#"
                onClick={() => setMenuOpen(false)}
              >
                Shop
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle `}
                href="#"
                onClick={() => setMenuOpen(false)}
              >
                Software Solutions
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link`}
                href="#"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link`}
                href=""
                onClick={() => setMenuOpen(false)}
              >
                Partners
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link`}
                href="#"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link `}
                href="#"
                onClick={() => setMenuOpen(false)}
                style={{ paddingRight: "0" }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Links;
