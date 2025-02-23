import React from "react";

function Hero() {
  return (
    <footer style={{ background: "#387ed1", marginTop: "4rem", padding: "2%" }}>
      <section className="container" id="supportHero">
        <div className="d-flex justify-content-between mt-4 mb-3" >
          <h4 className="text-start text-white fs-4">
          Support Portal
          </h4>
        
          <h4 className="text-end up-main-head  up-main-head2  fw-normal ">
            Track tickets
          </h4>
        </div>
        <div className="row ">
          <div className="col-8 p-3">
            <h1 className="fs-3 text-white mt-3 mb-5 fw-normal">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <div className="input-group">
              <input type="text" className="f" placeholder="Eg. how do I activate F&O" style={{ boxShadow: "none", outline: "none" }} />
              <button className="btn btn-dark " type="button">
                <i className="fas fa-search text-info"></i>
              </button>
            </div>
            <br />
            <a href="" className="below-input-link">Track account opening</a>
            <a href="" className="below-input-link  below-input-link2">Track segment activation</a>
            <a href="" className="below-input-link  below-input-link2">Intraday margins</a>
            <a href="" className="below-input-link   below-input-link3">Kite user manual</a>
          </div>
          <div className="col-4 p-3">

            <h1 className="fs-4 text-white mt-5 mb-3">Featured</h1>
            <ol>
              <li>
                <a href="" className="Order-support2-li">Current Takeovers and Delisting - January 2025</a>
              </li>
              <li>
                <a href="" className="Order-support2-li">Latest Intraday leverages - MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Hero;
