import React from "react";
import "../Home/Home.css";
import Nav from "../Navbar/Nav";
import logo from "../../assets/img/arrow.png";
import LogoHero from "../../assets/img/hero.png";
import { useHistory } from "react-router-dom";
function Home() {
  const history = useHistory();
  return (
    <div className="H-container">
      <Nav />
      <div className="hero">
        <div className="hero-body">
          <h3>Record your sales and share it anywhere..</h3>
          <p>create. convert to pdf. download file.</p>
          <img className="hero-arrow" src={logo} alt="arrow" />
          <button
            className="start-b btn"
            onClick={() => history.push("/dashboard")}
          >
            Start
          </button>
        </div>
        <div className="hero-img">
          <img src={LogoHero} alt="hero" />
        </div>
      </div>
    </div>
  );
}

export default Home;
