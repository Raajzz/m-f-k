import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [message, setMessage] = useState("WELCOME TO");
  const [messageStyle, setMessageStyle] = useState("");

  const mouseEnterHandler = (messageParam, styleParam) => {
    setMessage(messageParam);
    setMessageStyle(styleParam);
  };

  const mouseLeaveHandler = () => {
    setMessage("WELCOME TO");
    setMessageStyle("");
  };

  return (
    <div>
      {/* HEADER BEGIN */}
      <div className=" mb-20"></div>
      {/* HEADER END */}

      {/* BODY */}
      <div className="text-center">
        {/* <Link to="/">Home</Link>
        <Link to="/play">Play</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Error">Error</Link> */}
      </div>
      <div
        // style={{
        //   "font-size": "7vw",
        // }}
        className="text-center text-6xl sm:text-7xl md:text-8xl font-semibold"
      >
        <div className={messageStyle}>{message}</div>
        <br />
        <div className=" text-5xl sm:text-6xl md:text-7xl">
          <span
            className=" mx-4 pb-5 text-violet-900"
            onMouseEnter={() => {
              mouseEnterHandler("TEMP-MARRY", "text-violet-900");
            }}
            onMouseLeave={mouseLeaveHandler}
          >
            MARRY
          </span>
          -
          <span
            className=" mx-4 pb-5 text-red-600"
            onMouseEnter={() => {
              mouseEnterHandler("TEMP-LOVE", "text-red-600");
            }}
            onMouseLeave={mouseLeaveHandler}
          >
            LOVE
          </span>
          -
          <span
            className=" mx-4 pb-5 text-gray-600"
            onMouseEnter={() => {
              mouseEnterHandler("TEMP-FRIEND", "text-gray-600");
            }}
            onMouseLeave={mouseLeaveHandler}
          >
            FRIEND
          </span>
        </div>
      </div>
      {/* BODY-END */}

      {/* FOOTER */}
      {/* FOOTER END */}
    </div>
  );
};

export default Home;
