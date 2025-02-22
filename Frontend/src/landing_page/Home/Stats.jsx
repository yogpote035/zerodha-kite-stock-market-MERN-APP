import React from "react";

function Stats() {
  return (
    <div className="container p-2">
      <div className="row">
        <div className="col-6 mt-5 mb-2 p-5">
          <h2 className="mt-3 mb-5">Trust with confidence</h2>
          <h3 className="mt-4 mb-4 fs-5 fw-bolder">Customer-first always</h3>
          <p className="text-muted">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h3 className="mt-3 mb-3 fs-5 fw-bolder">No spam or gimmicks</h3>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h3 className="mt-2 mb-3 fs-5 fw-bolder">The Zerodha universe</h3>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h3 className="mt-2 mb-2 fs-5 fw-bolder  ">Do better with money</h3>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="media_images\ecosystem.png"
            className="mt-5"
            alt="Ecosystem "
            style={{ width: "90%" }}
          />
          <div className="d-flex justify-content-around mt-5 p-5">
            <a href="">
              Explore our products &nbsp;{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="">
              Try Kite demo &nbsp; <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
