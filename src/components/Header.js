import LOGO from "../assets/logo.png";
import HERO from "../assets/hero.png";
import PATH from "../assets/hero-angel.png";
import PLAYER from "../assets/player.png";
import Classes from "../styles/Header.module.css";
import Popup from "./Popup";
import { useState } from "react";
const Header = () => {
  const [show, setShow] = useState(false);
  const [showMenu,setShowMenu]=useState(false)
  return (
    <div className={Classes.header}>
      <nav>
        <div className={Classes.navBar}>
          <img src={LOGO} alt="logo" className={Classes.logo} />
          <div className={`${Classes.mobileMenu} ${showMenu ? Classes.showMenu:''}`}>
            <menu className={Classes.menu}>
              <a href="/">Home</a>
              <a href="/">Features</a>
              <a href="/">Support</a>
              <a href="/">Contact Us</a>
            </menu>
            <button className="btn" style={{ background: "#4285f4" }}>
              Download
            </button>
          </div>
        </div>
        <span
          className={Classes.hamburger}
          onClick={() => setShowMenu(!showMenu)}
     
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </span>
      </nav>

      <div className={Classes.hero}>
        <div className="container">
          <div className="webText">
            <h2>
              Take care of yours family's
              <span style={{ color: "#4285F4" }}> health.</span>
            </h2>
            <p>
              All in one destination for COVID-19 health queries. Consult
              10,000+ health workers about your concerns.
            </p>
            <div
              className="btn"
              style={{
                backgroundColor: "#ec5863",
                display: "inline-block",
                fontWeight: 400,
              }}
            >
              Get Started
            </div>
          </div>
          <div className={Classes.heroImg}>
            <img src={HERO} alt="" />
          </div>
        </div>
        <div className={Classes.player}>
          <img src={PLAYER} alt="" onClick={() => setShow(!show)} />
          <div>
            <h4>Stay safe with GoCorona</h4>
            <span>Watch Video</span>
          </div>
        </div>
      </div>
      <img src={PATH} alt="" className={Classes.heroPath} />

      <Popup show={show} />
    </div>
  );
};

export default Header;
