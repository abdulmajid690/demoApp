import React from "react";
// import "./main";
import "../App.scss";

const CustomerView = () => {
  return (
    <section className="select-container">
      <article className="bg-overlay"></article>
      <article className="position-relative">
        <div className="customer-guide">
          <h3>Trusted By Over 200,000</h3>
          <div className="carosel">
            <h3>customers</h3>
            <h2>
              From start to finish the whole experience was easy and clear.
              Booking was simple and very reasonably priced in comparison to
              other sites and the situation of the parking and shuttle were
              ideal for the airport. Overall a pleasant experience and got my
              holiday of to a great start - Craig Baxendale
            </h2>
          </div>
          <div className="flex-inline">
            <div className="underline"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <h4>Helping You Travel</h4>
        </div>
        <div className="space"></div>
        <div className="selection">
          <div className="select-date">
            <div className="airport-name">
              <label htmlFor="">airport</label>
              <select name="airprot" className="select">
                <option value="" selected>
                  --Select airport--
                </option>
                <option value="LGW">Gatwick Airport (LGW)</option>
                <option value="LHR">Heathrow Airport (LHR)</option>
                <option value="BRS">Bristol Airport (BRS)</option>
                <option value="STN">Stansted Airport (STN)</option>
                <option value="MAN">Manchester Airport (MAN)</option>
                <option value="LLT">London Luton Airport (LLT)</option>
                <option value="BHX">Birmingham Airport (BHX)</option>
                <option value="NCL">Newcastle Airport (NCL)</option>
              </select>
            </div>
            <article className="seperate-div">
              <div className="drop-off-date flex">
                <label htmlFor="">drop off date</label>
                <div className="border"></div>
              </div>
              <div className="drop-off-time flex">
                <label htmlFor="">drop off time</label>
                <select name="" id="">
                  <option value="00:00">00:00 am</option>
                  <option value="00:15">00:15 am</option>
                  <option value="00:30">00:30 am</option>
                  <option value="00:45">00:45 am</option>
                  <option value="01:00">01:00 am</option>
                  <option value="01:15">01:15 am</option>
                  <option value="01:30">01:30 am</option>
                  <option value="01:45">01:45 am</option>
                  <option value="02:00">02:00 am</option>
                  <option value="02:15">02:15 am</option>
                  <option value="02:30">02:30 am</option>
                  <option value="02:45">02:45 am</option>
                  <option value="03:00">03:00 am</option>
                  <option value="03:15">03:15 am</option>
                  <option value="03:30">03:30 am</option>
                  <option value="03:45">03:45 am</option>
                  <option value="04:00">04:00 am</option>
                  <option value="04:15">04:15 am</option>
                  <option value="04:45">04:45 am</option>
                  <option value="05:00">05:00 am</option>
                  <option value="05:15">05:15 am</option>
                  <option value="05:30">05:30 am</option>
                  <option value="05:45">05:45 am</option>
                  <option value="06:00">06:00 am</option>
                  <option value="06:15">06:15 am</option>
                  <option value="06:30">06:30 am</option>
                  <option value="06:45">06:45 am</option>
                  <option value="07:00">07:00 am</option>
                  <option value="07:15">07:15 am</option>
                  <option value="07:30">07:30 am</option>
                  <option value="07:45">07:45 am</option>
                  <option value="08:00">08:00 am</option>
                  <option value="08:15">08:15 am</option>
                  <option value="08:30">08:30 am</option>
                  <option value="08:45">08:45 am</option>
                  <option value="09:15">09:15 am</option>
                  <option value="09:00">09:00 am</option>
                  <option value="09:30">09:30 am</option>
                  <option value="09:45">09:45 am</option>
                  <option value="10:00">10:00 am</option>
                  <option value="10:15">10:15 am</option>
                  <option value="10:30">10:30 am</option>
                  <option value="10:45">10:45 am</option>
                  <option value="11:00">11:00 am</option>
                  <option value="11:15">11:15 am</option>
                  <option value="11:30">11:30 am</option>
                  <option value="11:45">11:45 am</option>
                  <option value="12:00">12:00 pm</option>
                  <option value="12:15">12:15 pm</option>
                  <option value="12:30">12:30 pm</option>
                  <option value="12:45">12:45 pm</option>
                  <option value="13:00">13:00 pm</option>
                  <option value="13:15">13:15 pm</option>
                  <option value="13:30">13:30 pm</option>
                  <option value="13:45">13:45 pm</option>
                  <option value="14:00">14:00 pm</option>
                  <option value="14:15">14:15 pm</option>
                  <option value="14:30">14:30 pm</option>
                  <option value="14:45">14:45 pm</option>
                  <option value="15:00">15:00 pm</option>
                  <option value="15:15">15:15 pm</option>
                  <option value="15:30">15:30 pm</option>
                  <option value="15:45">15:45 pm</option>
                  <option value="16:00">16:00 pm</option>
                  <option value="16:15">16:15 pm</option>
                  <option value="16:30">16:30 pm</option>
                  <option value="16:45">16:45 pm</option>
                  <option value="17:00">17:00 pm</option>
                  <option value="17:15">17:15 pm</option>
                  <option value="17:45">17:45 pm</option>
                  <option value="17:00">17:00 pm</option>
                  <option value="18:15">18:15 pm</option>
                  <option value="18:30">18:30 pm</option>
                  <option value="18:45">18:45 pm</option>
                  <option value="18:00">18:00 pm</option>
                  <option value="19:15">19:15 pm</option>
                  <option value="19:30">19:30 pm</option>
                  <option value="19:45">19:45 pm</option>
                  <option value="19:00">19:00 pm</option>
                  <option value="20:15">20:15 pm</option>
                  <option value="20:30">20:30 pm</option>
                  <option value="20:45">20:45 pm</option>
                  <option value="20:00">20:00 pm</option>
                  <option value="21:15">21:15 pm</option>
                  <option value="21:30">21:30 pm</option>
                  <option value="21:45">21:45 pm</option>
                  <option value="21:15">21:15 pm</option>
                  <option value="22:00">22:00 pm</option>
                  <option value="22:30">22:30 pm</option>
                  <option value="22:45">22:45 pm</option>
                  <option value="22:00">22:00 pm</option>
                  <option value="23:15">23:15 pm</option>
                  <option value="23:30">23:30 pm</option>
                  <option value="23:45">23:45 pm</option>
                </select>
              </div>
            </article>
            <article className="seperate-div">
              <div className="arrival-date flex">
                <label htmlFor="">arrival date</label>
                <div className="border"></div>
              </div>
              <div className="arrival-time flex">
                <label htmlFor="">arrival time</label>
                <select name="" id="">
                  <option value="00:00">00:00 am</option>
                  <option value="00:15">00:15 am</option>
                  <option value="00:30">00:30 am</option>
                  <option value="00:45">00:45 am</option>
                  <option value="01:00">01:00 am</option>
                  <option value="01:15">01:15 am</option>
                  <option value="01:30">01:30 am</option>
                  <option value="01:45">01:45 am</option>
                  <option value="02:00">02:00 am</option>
                  <option value="02:15">02:15 am</option>
                  <option value="02:30">02:30 am</option>
                  <option value="02:45">02:45 am</option>
                  <option value="03:00">03:00 am</option>
                  <option value="03:15">03:15 am</option>
                  <option value="03:30">03:30 am</option>
                  <option value="03:45">03:45 am</option>
                  <option value="04:00">04:00 am</option>
                  <option value="04:15">04:15 am</option>
                  <option value="04:45">04:45 am</option>
                  <option value="05:00">05:00 am</option>
                  <option value="05:15">05:15 am</option>
                  <option value="05:30">05:30 am</option>
                  <option value="05:45">05:45 am</option>
                  <option value="06:00">06:00 am</option>
                  <option value="06:15">06:15 am</option>
                  <option value="06:30">06:30 am</option>
                  <option value="06:45">06:45 am</option>
                  <option value="07:00">07:00 am</option>
                  <option value="07:15">07:15 am</option>
                  <option value="07:30">07:30 am</option>
                  <option value="07:45">07:45 am</option>
                  <option value="08:00">08:00 am</option>
                  <option value="08:15">08:15 am</option>
                  <option value="08:30">08:30 am</option>
                  <option value="08:45">08:45 am</option>
                  <option value="09:15">09:15 am</option>
                  <option value="09:00">09:00 am</option>
                  <option value="09:30">09:30 am</option>
                  <option value="09:45">09:45 am</option>
                  <option value="10:00">10:00 am</option>
                  <option value="10:15">10:15 am</option>
                  <option value="10:30">10:30 am</option>
                  <option value="10:45">10:45 am</option>
                  <option value="11:00">11:00 am</option>
                  <option value="11:15">11:15 am</option>
                  <option value="11:30">11:30 am</option>
                  <option value="11:45">11:45 am</option>
                  <option value="12:00">12:00 pm</option>
                  <option value="12:15">12:15 pm</option>
                  <option value="12:30">12:30 pm</option>
                  <option value="12:45">12:45 pm</option>
                  <option value="13:00">13:00 pm</option>
                  <option value="13:15">13:15 pm</option>
                  <option value="13:30">13:30 pm</option>
                  <option value="13:45">13:45 pm</option>
                  <option value="14:00">14:00 pm</option>
                  <option value="14:15">14:15 pm</option>
                  <option value="14:30">14:30 pm</option>
                  <option value="14:45">14:45 pm</option>
                  <option value="15:00">15:00 pm</option>
                  <option value="15:15">15:15 pm</option>
                  <option value="15:30">15:30 pm</option>
                  <option value="15:45">15:45 pm</option>
                  <option value="16:00">16:00 pm</option>
                  <option value="16:15">16:15 pm</option>
                  <option value="16:30">16:30 pm</option>
                  <option value="16:45">16:45 pm</option>
                  <option value="17:00">17:00 pm</option>
                  <option value="17:15">17:15 pm</option>
                  <option value="17:45">17:45 pm</option>
                  <option value="17:00">17:00 pm</option>
                  <option value="18:15">18:15 pm</option>
                  <option value="18:30">18:30 pm</option>
                  <option value="18:45">18:45 pm</option>
                  <option value="18:00">18:00 pm</option>
                  <option value="19:15">19:15 pm</option>
                  <option value="19:30">19:30 pm</option>
                  <option value="19:45">19:45 pm</option>
                  <option value="19:00">19:00 pm</option>
                  <option value="20:15">20:15 pm</option>
                  <option value="20:30">20:30 pm</option>
                  <option value="20:45">20:45 pm</option>
                  <option value="20:00">20:00 pm</option>
                  <option value="21:15">21:15 pm</option>
                  <option value="21:30">21:30 pm</option>
                  <option value="21:45">21:45 pm</option>
                  <option value="21:15">21:15 pm</option>
                  <option value="22:00">22:00 pm</option>
                  <option value="22:30">22:30 pm</option>
                  <option value="22:45">22:45 pm</option>
                  <option value="22:00">22:00 pm</option>
                  <option value="23:15">23:15 pm</option>
                  <option value="23:30">23:30 pm</option>
                  <option value="23:45">23:45 pm</option>
                </select>
              </div>
            </article>
            <article className="seperate-div">
              <div className="input-field flex">
                <label htmlFor="">promo code</label>
                <input type="text" placeholder="code:" name="enter-code" />
              </div>
              <div className="btn-container flex">
                <button className="find-btn">find parking</button>
              </div>
            </article>
          </div>
          <div className="review-rating">
            <h1>Why Book with us?</h1>
            <h1 className="bold-text">96%</h1>
            <h2>Review rating.</h2>
            <p>over</p>
            <p>2,060</p>
            <p>customers</p>
          </div>
        </div>
      </article>
    </section>
  );
};
export default CustomerView;
