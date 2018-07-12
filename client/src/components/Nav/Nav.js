import React from "react";
import "./Nav.css"

const Nav = () => (
  <nav className="navbar fixed-top navbar-dark">
    <a className="navbar-brand" href="/">
      PickUp
    </a>
    <ul className="nav">
      <li className="nav-item">
        <div>
          <a className="nav-link active" href="/create">Create</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/games">Games</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/locations">Locations</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Saved</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
