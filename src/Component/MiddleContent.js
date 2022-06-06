import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Image from "../Assets/Image/logo-removebg-preview.png";
import "../Assets/Style/style.scss";

const MiddleContent = () => {
  return (
    <>
      <section className="offer-container">
        <article className="persons-bg">
          <div className="discount-card">
            <div className="overlay">
              <h1>Cheaper Travel Money For All!</h1>
              <img
                src="https://www.trustedtravel.com/img/WeSwap_logo_white.png"
                alt=""
              />
              <p>Enjoy £10 Free Travel Money from Trusted Travel & WeSwap.</p>
              <button className="primary-btn">GET YOUR FREE WESWAP CARD</button>
            </div>
          </div>
        </article>
      </section>
      <section className="carousel-container">
        <div className="content">
          <h1>Most Popular Airports</h1>
          <div className="flex-inline">
            <div className="underline"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        <div className="d-flex slider-container">
          <div className="btn-container">
            <button className="prev-btn">
              <FaChevronLeft />
            </button>
          </div>
          <article className="company-products">
            <div className="liverpool">
              <div className="top-overlay"></div>
              <div className="btns-container">
                <p>united kingdom</p>
                <h1 className="title">Liverpool Airport</h1>
                <button className="parking-btn">book parking</button>
                <button className="booking-btn">book a lounge</button>
              </div>
            </div>
            <div className="gatwick">
              <div className="top-overlay"></div>
              <div className="btns-container">
                <p>united kingdom</p>
                <h1 className="title">Gatwick Airport</h1>
                <button className="parking-btn">book parking</button>
                <button className="booking-btn">book a lounge</button>
              </div>
            </div>
            <div className="manchester">
              <div className="top-overlay"></div>
              <div className="btns-container">
                <p>united kingdom</p>
                <h1 className="title">Manchester Airport</h1>
                <button className="parking-btn">book parking</button>
                <button className="booking-btn">book a lounge</button>
              </div>
            </div>
            <div className="heathrow">
              <div className="top-overlay"></div>
              <div className="btns-container">
                <p>united kingdom</p>
                <h1 className="title">Heathrow Airport</h1>
                <button className="parking-btn">book parking</button>
                <button className="booking-btn">book a lounge</button>
              </div>
            </div>
          </article>
          <article className="company-products d-none">
            <div className="glasgow">
              <div className="top-overlay"></div>
              <div className="btns-container">
                <p>united kingdom</p>
                <h1 className="title">Glasgow Airport</h1>
                <button className="parking-btn">book parking</button>
                <button className="booking-btn">book a lounge</button>
              </div>
            </div>
            <div className="edinburgh">
              <div className="top-overlay"></div>
              <div className="btns-container">
                <p>united kingdom</p>
                <h1 className="title">Edinburgh Airport</h1>
                <button className="parking-btn">book parking</button>
                <button className="booking-btn">book a lounge</button>
              </div>
            </div>
            <div className="stansted">
              <div className="top-overlay"></div>
              <div className="btns-container">
                <p>united kingdom</p>
                <h1 className="title">Stansted Airport</h1>
                <button className="parking-btn">book parking</button>
                <button className="booking-btn">book a lounge</button>
              </div>
            </div>
            <div className="birmingham">
              <div className="top-overlay"></div>
              <div className="btns-container">
                <p>united kingdom</p>
                <h1 className="title">Birmingham Airport</h1>
                <button className="parking-btn">book parking</button>
                <button className="booking-btn">book a lounge</button>
              </div>
            </div>
          </article>
          <div className="btn-container">
            <button className="next-btn">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>
      <footer className="footer-container">
        <article className="about-container">
          <div className="logo">
            <img src={Image} alt="" />
          </div>
          <div className="seperate-content">
            <div className="column">
              <ul>
                <h4>your account</h4>
                <li className="footer-link">
                  <a href="#">Members Log In</a>
                </li>
                <li className="footer-link">
                  <a href="#">Become A Member</a>
                </li>
              </ul>

              <ul>
                <h4>help</h4>
                <li className="footer-link">
                  <a href="#">Support</a>
                </li>
                <li className="footer-link">
                  <a href="#">Contact Us</a>
                </li>
                <li className="footer-link">
                  <a href="#">Trusted Travel Blog</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <h4>Check Us Out</h4>
                <li className="footer-link">
                  <a href="#">Trust Pilot Reviews</a>
                </li>
              </ul>

              <ul>
                <h4>Our Business</h4>
                <li className="footer-link">
                  <a href="#">What We Do</a>
                </li>
                <li className="footer-link">
                  <a href="#">Work With Us</a>
                </li>
                <li className="footer-link">
                  <a href="#">How do we get the</a>
                </li>
                <li className="footer-link">
                  <a href="#">Trusted Score?</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="social-link-container">
            <h4>Follow us on Social Media</h4>
            <ul className="social-links">
              <li>
                <a href="">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="text-container">
            <h4>Trusted Travel Members Club</h4>
            <p>
              Join now for exclusive discounts, latest
              <br /> updates, offers and new products.
            </p>
            <button className="primary-btn">join us now!</button>
          </div>
        </article>
        <article className="parking-names">
          <div className="parking-side-content">
            <h3>Popular UK Airport Parking</h3>
            <p>
              Trusted Travel provides safe and secure meet & greet, park & ride
              offsite, & on-site parking at all the UK’s major airports,
              including:
            </p>
            <div className="flexible-content">
              <ul className="links">
                <li>
                  <a href="#">Birmingham Airport Parkings</a>
                </li>
                <li>
                  <a href="#">Bristol Airport Parking</a>
                </li>
                <li>
                  <a href="#">Edinburgh Airport Parking</a>
                </li>
                <li>
                  <a href="#">Gatwick Airport Parking</a>
                </li>
                <li>
                  <a href="#">Glasgow Airport Parking</a>
                </li>
              </ul>

              <ul className="links">
                <li>
                  <a href="#">Heathrow Airport Parking</a>
                </li>
                <li>
                  <a href="#">Liverpool Airport Parking</a>
                </li>
                <li>
                  <a href="#">Manchester Airport Parking</a>
                </li>
                <li>
                  <a href="#">Newcastle Airport Parking</a>
                </li>
                <li>
                  <a href="#">Stanstead Airport Parking</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lounge-side-content">
            <h3>Popular UK Airport Lounges</h3>
            <p>
              Relax before you fly with an airport lounge. We provide lounges
              internationally and at the UK’s leading airports, including:
            </p>
            <div className="flexible-content">
              <ul className="links">
                <li>
                  <a href="#">Birmingham Airport Parkings</a>
                </li>
                <li>
                  <a href="#">Bristol Airport Parking</a>
                </li>
                <li>
                  <a href="#">Edinburgh Airport Parking</a>
                </li>
                <li>
                  <a href="#">Gatwick Airport Parking</a>
                </li>
                <li>
                  <a href="#">Glasgow Airport Parking</a>
                </li>
              </ul>

              <ul className="links">
                <li>
                  <a href="#">Heathrow Airport Parking</a>
                </li>
                <li>
                  <a href="#">Liverpool Airport Parking</a>
                </li>
                <li>
                  <a href="#">Manchester Airport Parking</a>
                </li>
                <li>
                  <a href="#">Newcastle Airport Parking</a>
                </li>
                <li>
                  <a href="#">Stanstead Airport Parking</a>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="footer-end-content">
          <p>
            <a href="#" className="primary-link">
              Terms and Conditions
            </a>
          </p>
          <p>Trusted Travel Ltd. All Rights Reserved</p>
          <p>Data Protection Registration: ZA157121</p>
          <p>
            <a href="#" className="primary-link">
              Privacy Policy
            </a>
          </p>
        </article>
      </footer>
    </>
  );
};

export default MiddleContent;
