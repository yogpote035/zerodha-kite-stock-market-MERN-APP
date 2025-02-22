import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media_images/largestBroker.svg" alt="Largest Broker" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all market
            volumes in india daily by trading and investing in:
          </p>
          <div className="row">
            <ul className="col-6">
              <li>
                <p>Futures and options</p>
              </li>
              <li>
                <p>Commodity and Derivatives</p>
              </li>
              <li>
                <p>Currency and Derivatives</p>
              </li>
            </ul>

            <ul className="col-6">
              <li>
                <p>Stocks and IPO</p>
              </li>
              <li>
                <p>Direct Mutual Fonds</p>
              </li>
              <li>
                <p>Bonds and Govt. Securities</p>
              </li>
            </ul>
          </div>
          <img src="media_images\pressLogos.png" alt="Press Images" style={{width:"90%"}} />
        </div>
      </div>
    </div>
  );
}

export default Awards;
