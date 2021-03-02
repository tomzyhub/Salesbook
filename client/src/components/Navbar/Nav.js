import React from "react";
import "../Navbar/Nav.css";
import { useHistory } from "react-router-dom";
function Nav() {
  const history = useHistory();
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li className="logo">
            <a href="/">SalesBook</a>
          </li>

          <li className="home-link">
            <a href="/">Home </a>
          </li>
          <button
            className="start-btn"
            onClick={() => history.push("/dashboard")}
          >
            start now
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
