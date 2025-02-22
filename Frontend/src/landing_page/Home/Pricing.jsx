import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h4 className="fs-2">Unbeatable pricing</h4>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="">
            See pricing &nbsp; <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col border p-3">
              <h2>
                <i className="fa-solid fa-indian-rupee-sign"></i>0
              </h2>
              <p>Free equity delivery and direct mutual fund</p>
            </div>
            <div className="col border p-3">
              <h2>
                <i className="fa-solid fa-indian-rupee-sign"></i>20
              </h2>
              <p>Intraday and F&amp;O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
