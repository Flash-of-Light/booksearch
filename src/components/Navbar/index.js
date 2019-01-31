import React from "react";

function Navbar(props) {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <nav className="navbar-brand">Book Search</nav>

      <nav className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">Search</li>
          <li className="nav-item">Saved</li>
        </ul>
      </nav>      
    </div>
  );
}

export default Navbar;