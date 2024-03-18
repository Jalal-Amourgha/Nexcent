import React, { useState } from "react";
import { headerLogo } from "../assets/icons";
import Button from "../components/Button";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handelToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <nav className="container">
        <a href="/">
          <img src={headerLogo} alt="Logo" />
        </a>
        <div className="links-ul">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <Button label="Register Now" icon="fa-solid fa-arrow-right" />
        </div>

        <i
          className={`${toggle ? "fa-solid fa-xmark" : "fa-solid fa-bars"}`}
          id="menu"
          onClick={handelToggle}
        ></i>
      </nav>
      {toggle ? (
        <div className="mobile-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label} onClick={handelToggle}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <Button label="Register Now" icon="fa-solid fa-arrow-right" />
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Navbar;
