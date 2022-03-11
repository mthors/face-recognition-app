import React from "react";
import "tachyons";
import Tilt from "react-parallax-tilt";
import logo from "./logo.png";

const Logo = () => {
  return (
    <div className="ma4 mt0 w4">
      <Tilt>
        <div
          style={{
            height: "130px",
            alignContent: "center",
          }}
        >
          <img alt="logo" src={logo}></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
