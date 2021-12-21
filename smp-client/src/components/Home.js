import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="text-center">
        <Link to="/">Home</Link>
        <Link to="/play">Play</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Error">Error</Link>
      </div>
      <div
        style={{
          "font-size": "7vw",
        }}
        className="text-center"
      >
        WELCOME TO
        <br />
        <span className=" mx-4">FRIEND</span>-
        <span className=" mx-4">MARRY</span>-<span className=" mx-4">LOVE</span>
      </div>
    </div>
  );
};

export default Home;
