import React from "react";
import addBtn from "../../assets/img/addbtn.png";
import View from "../../assets/img/view.png";
// import Home from "../../assets/img/home.png";
import "../Sidenav/SideNav.css";
import { Link } from "react-router-dom";

function SideNav() {
  const putOut = () => {
    alert("am out");
  };
  return (
    <div>
      <div className="aside-container">
        {/* <Link to="/"> */}
        <a href="/">
          <li>Home</li>
        </a>
        <img className="logo-dash" src={Home} alt="home" />
        {/* </Link> */}

        <img
          className="img-btn"
          src={addBtn}
          alt="add sales"
          onClick={putOut}
        />
        <img className="img-btn" src={View} alt="view sales" />
      </div>
    </div>
  );
}

export default SideNav;
