import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <navbar className="navbar navbar-expand-lg navbar-light bg-light">
      <nav className="navbar-brand">Book Search</nav>
      <nav className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="/">Search</a>
          </li>
          <li className="nav-item">
            <p> | </p>
          </li>
          <li className="nav-item">
            <a href="/">Saved</a>
          </li>
        </ul>
      </nav>
    </navbar>
  );
}

export default Navbar;