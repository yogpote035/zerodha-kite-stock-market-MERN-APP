import React from "react";
import { NavLink } from "react-router-dom";

function OpenAccount() {
  return (
    <>
      <div className="container p-5 m-5">
        <div className="row">
          <h1 className="mt-5 text-center">Open a Zerodha account</h1>
          <p className="mt-1 text-center">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <div className="d-flex justify-content-center">
            <a href="http://localhost:5174/" className="btn btn-lg btn-primary bt-open-acc"> Signup now</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default OpenAccount;
