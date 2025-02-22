import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="container p-5 mt-5">
        <div className="row">
          <div className="col">
            <h3 className="fs-4">404</h3>
            <h1 className="fs-1 mt-5">Kiaan couldn’t find that page</h1>

            <h3 className="fs-4">
              We couldn’t find the page you were looking for.
              <NavLink to={"/"} className="text-center fs-5 fw-bold"> Visit Zerodha’s home </NavLink>
            </h3>
          </div>
          <div className="col">
            <img
              src="media_images/kiaan404.jpg"
              alt="kiaan"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
