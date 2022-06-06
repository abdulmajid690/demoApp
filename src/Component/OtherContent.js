import React from "react";
import { FaCar, FaCoffee, FaBriefcase } from "react-icons/fa";
import "../Assets/Style/style.scss";

const OtherContent = () => {
  return (
    <section className="container">
      <article className="reviews-content">
        <div>
          <h1>Over 200,000 Happy Customers Have Booked With Trusted Travel!</h1>
        </div>
      </article>
      <article className="travel-container">
        <div className="bg-overlay"></div>
        <div className="flexible-div">
          <h2>Helping You Travel</h2>
          <div className="flex-inline">
            <div className="underline"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <p>
            Here at Trusted Travel our customers truly are the most important
            thing. No matter what the circumstance we will put you first, Trust
            that Trusted Travel will always put you and your travel experience
            first.
          </p>
          <div className="btn-container">
            <button className="join-btn">join us now!</button>
            <button className="learn-more-btn">learn more</button>
          </div>
        </div>
      </article>
      <section className="detail-container">
        <div className="d-flex">
          <article className="left-flex">
            <h1 className="text-head">What We Do</h1>
            <div className="flex-inline">
              <div className="underline"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <p>
              Trusted Travel are specialists in airport parking and lounges.
            </p>
            <div className="content">
              <article>
                <div className="icon">
                  <FaCar />
                </div>
                <div className="description">
                  <p>
                    Trusted Travel offers a wide range of secure{" "}
                    <a href="#" className="primary-link">
                      meet & greet
                    </a>{" "}
                    ,{" "}
                    <a href="#" className="primary-link">
                      park & ride
                    </a>{" "}
                    and{" "}
                    <a href="#" className="primary-link">
                      on-airport parking
                    </a>{" "}
                    at all major UK airports. Compare your airport parking
                    options and choose the best parking product to suit your
                    needs. All our listed car parks & parking services are given
                    a unique ‘Trusted Score’ based on customer reviews and other
                    factors to help you choose your airport parking with
                    confidence.
                  </p>
                </div>
              </article>
              <article>
                <div className="icon">
                  <FaCoffee />
                </div>
                <div className="description">
                  <p>
                    Why not relax before you fly in a luxury VIP airport lounge.
                    We provide lounges at all major UK and international
                    airports so you can travel in style to your destination and
                    also coming home. From only £15 per person, an airport
                    lounge may be cheaper than you think and offers excellent
                    value for money. Take the stress out of airport travel with
                    Trusted Travel.
                  </p>
                </div>
              </article>
              <article>
                <div className="icon">
                  <FaBriefcase />
                </div>
                <div className="description">
                  <p>
                    If you need to book international airport transfers, get a
                    WeSwap prepaid travel currency card or trackable luggage tag
                    we are here to make your life easier and help you travel
                  </p>
                </div>
              </article>
            </div>
          </article>
          <article className="right-flex">
            <article className="seperate-content">
              <div className="lounges-content">
                <div className="overlay-content">
                  <p>
                    Relax before you fly with an airport lounge from Trusted
                    Travel. Get away from the hustle and bustle of a busy
                    airport terminal, put your feet up and enjoy the
                    complimentary food, drinks and wi-fi on offer. Lounges from
                    only £15 per person.
                  </p>
                  <button className="light-btn">
                    book an airport lounge now
                  </button>
                </div>
                <h2>airport lounges</h2>
              </div>
              <div className="parking-content">
                <div className="overlay-content">
                  <p>
                    Find secure airport parking at all major UK airports and
                    book online. Trusted Travel’s unique “Trusted Score” will
                    help you choose the right car park to suit your needs and
                    budget so you can travel with complete confidence knowing
                    that your car is safe.
                  </p>
                  <button className="light-btn">
                    book airport parking now
                  </button>
                </div>
                <h2>airport parking</h2>
              </div>
            </article>
            <article className="seperate-content">
              <div className="transfer-content">
                <div className="overlay-content small-overlay">
                  <p>
                    Take the stress out of your journey and plan your airport
                    transfers anywhere in the world with Trusted Travel. We
                    offer a wide range of airport transfer options from shuttle
                    bus services to a chauffeur driven limousine direct your
                    door.
                  </p>
                  <button className="light-btn">
                    book airport transfers now
                  </button>
                </div>
                <h2>airport transfers</h2>
              </div>
              <div className="trusted-content">
                <div className="overlay-content big-overlay">
                  <p>
                    The Trusted Promise: Trusted Travel is your booking agent
                    and will always act in your best interests. We will deal
                    with any unlikely issues that arise and fight your corner.
                    This is how we have achieved our “Excellent” TrustPilot
                    rating.
                  </p>
                  <button className="light-btn">learn more</button>
                </div>
                <h2>our trusted promise</h2>
              </div>
            </article>
          </article>
        </div>
      </section>
    </section>
  );
};

export default OtherContent;
