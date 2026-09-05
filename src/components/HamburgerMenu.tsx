import { useState } from "react";
import Profile from "@components/Profile";

import "./hamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // return statement
  return (
    <nav aria-label="Main navigation">
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        className="menuButton"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)} />
      )}
      {isOpen && (
        <section
          aria-label="Navigation menu"
          aria-expanded={isOpen}
          className={"hamburgerMenu"}
        >
          <button className="closeButton" onClick={() => setIsOpen(false)}>
            Close
          </button>
          {/* Profile */}
          <Profile/>
          <ul className="menuList">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </section>
      )}
    </nav>
  );
};

export default HamburgerMenu;
