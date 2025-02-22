import React from "react";
function Hero() {
  return (
    <>
      <div className="container p-5 m-5">
        <div className="row">
          <div className="d-flex justify-content-center">
            <img
              src="media_images/homeHero.png"
              alt="Home Hero"
              className="mb-5 h-75 w-75"
            />
          </div>
          <h1 className="mt-5 text-center">Invest in everything</h1>
          <p className="mt-1 text-center">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <div className="d-flex justify-content-center">
            <button className="btn w-25 btn-primary text-center fs-5 open-account fw-bold">
              Signup now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
