import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media_images/education.svg" alt="Education" style={{width:"80%"}} />
        </div>
        <div className="col-6">
          <h4 className="fs-2">Free and open market education</h4>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className="mb-1">
            Varsity &nbsp; <i className="fa-solid fa-arrow-right"></i>
          </a>
          <p className="">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" className="">
            TradingQ&A &nbsp; <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
