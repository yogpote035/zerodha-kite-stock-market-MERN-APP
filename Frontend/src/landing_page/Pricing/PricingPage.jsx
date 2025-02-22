import React from "react";
import Brokerage from "./Brokerage";
import Hero from "./Hero";
import OpenAccount from "../OpenAccount";

function PricingPage() {
  return (
    <div style={{ marginTop: "5rem" }}>
      <Hero />
      <OpenAccount />
      <Brokerage />
    </div>
  );
}

export default PricingPage;
