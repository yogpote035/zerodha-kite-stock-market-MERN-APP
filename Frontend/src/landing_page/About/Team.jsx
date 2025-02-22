import React from "react";
import { NavLink } from "react-router-dom";

function Team() {
  return (
    <div className="container p-2">
      <h1 className="text-center fw-bolder fs-2 mt-5" style={{ color: "rgb(66,66,66)" }}>
        People
      </h1>
      <div className="row p-5">
        <div className="col p-2">
          <img
            src="media_images/nithinKamath.jpg"
            width="65%"
            alt="CEO PICTURE"
            style={{ borderRadius: "50%", marginInlineStart: "65px" }}
          />
          <p className="fs-4" style={{ color: "rgb(66,66,66)", marginInlineStart: "169px" }}>
            Nithin Kamath
            <br />
            <small className="text-muted fs-6"> Founder, CEO</small>
          </p>
        </div>
        <div className="col p-2">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <NavLink to="/">Homepage</NavLink> /{" "}
            <NavLink to="">TradingQnA</NavLink> / <NavLink to="">Twitter</NavLink>
          </p>
        </div>
      </div>
      {/* 1st row */}
      <div className="row p-2">
        <div className="col p-2">
          <img
            src="media_images/Nikhil.jpg"
            width="65%"
            alt="CEO PICTURE"
            style={{ borderRadius: "50%" }}
          />
          <p className="fs-4 mx-5" style={{ color: "rgb(66,66,66)" }}>
            Nikhil Kamath
            <br />
            <small className="text-muted fs-6">Co-founder & CFO</small>
          </p>
        </div>
        <div className="col p-2">
          <img
            src="media_images/Kailash.jpg"
            width="65%"
            alt="CEO PICTURE"
            style={{ borderRadius: "50%" }}
          />
          <p className="fs-4 mx-5" style={{ color: "rgb(66,66,66)" }}>
            Dr. Kailash Nadh
            <br />
            <small className="text-muted fs-6">CTO</small>
          </p>
        </div>
        <div className="col p-2">
          <img
            src="media_images/Venu.jpg"
            width="65%"
            alt="CEO PICTURE"
            style={{ borderRadius: "50%" }}
          />
          <p className="fs-4 mx-5" style={{ color: "rgb(66,66,66)" }}>
            Venu Madhav
            <br />
            <small className="text-muted fs-6">COO</small>
          </p>
        </div>
      </div>
      {/* 2nd row */}
      <div className="row p-2">
        <div className="col p-2">
          <img
            src="media_images/Hanan.jpg"
            width="65%"
            alt="CEO PICTURE"
            style={{ borderRadius: "50%" }}
          />
          <p className="fs-4 mx-5" style={{ color: "rgb(66,66,66)" }}>
            Hanan Delvi
            <br />
            <small className="text-muted fs-6">CCO</small>
          </p>
        </div>
        <div className="col p-2">
          <img
            src="media_images/Seema.jpg"
            width="65%"
            alt="CEO PICTURE"
            style={{ borderRadius: "50%" }}
          />
          <p className="fs-4 mx-5" style={{ color: "rgb(66,66,66)" }}>
            Seema Patil
            <br />
            <small className="text-muted fs-6">Director</small>
          </p>
        </div>
        <div className="col p-2">
          <img
            src="media_images/karthik.jpg"
            width="65%"
            alt="CEO PICTURE"
            style={{ borderRadius: "50%" }}
          />
          <p className="fs-4 mx-5" style={{ color: "rgb(66,66,66)" }}>
            Karthik Rangappa
            <br />
            <small className="text-muted fs-6">Chief of Education</small>
          </p>
        </div>
      </div>
      {/* 3rd row */}
      <div className="row p-2">
        <div className="col-4 p-2">
          <img
            src="media_images/Nikhil.jpg"
            width="65%"
            alt="CEO PICTURE"
            style={{ borderRadius: "50%" }}
          />
          <p className="fs-4 mx-5" style={{ color: "rgb(66,66,66)" }}>
            Austin Prakesh
            <br />
            <small className="text-muted fs-6">Director Strategy</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
