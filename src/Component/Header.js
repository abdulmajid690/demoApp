import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { AiOutlineCaretDown } from "react-icons/ai";
import "../App.scss";
import Image from "../Assets/Image/logo-removebg-preview.png";

const Header = () => {
  let isShow = false;
  return (
    <>
      <header className="header-container">
        <nav className="nav-group">
          <div className="logo">
            <a href="#">
              <img src={Image} alt="" />
            </a>
          </div>
          <div className="btn-container">
            <button className="login-btn">login</button>
            <button className="toggle-btn">
              {isShow ? <GrClose /> : <GiHamburgerMenu />}
            </button>
          </div>
        </nav>
      </header>
      <article className="disabled-sidebar">
        <div className="center-box">
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#" className="nav-link">
                home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                airport parking <AiOutlineCaretDown />
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Gatwick Airport
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Heathrow Airport
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                contact us
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                extras
                <AiOutlineCaretDown />
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Faqs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Terms and Conditions
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
};

export default Header;
