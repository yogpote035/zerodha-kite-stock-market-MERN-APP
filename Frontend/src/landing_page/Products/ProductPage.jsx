import React from "react";
import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";

function ProductPage() {
  return (
    <div  style={{marginTop:"5rem"}}>
      <Hero />
      <LeftImage />
      <RightImage />
      <Universe />
    </div>
  );
}

export default ProductPage;
