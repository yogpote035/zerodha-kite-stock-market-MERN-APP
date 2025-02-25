import React from "react";
import OpenAccount from "../OpenAccount";
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
            <OpenAccount />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
