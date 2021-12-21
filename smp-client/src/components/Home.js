import React, { useState } from "react";
import { Link } from "react-router-dom";
//GiFrayedArrow
import { AiOutlineArrowRight } from "react-icons/gi";


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
        className="text-center text-7xl sm:text-8xl md:text-8xl font-semibold"
      >
        <div className={messageStyle}>{message}</div>
        <br />
        <div className=" text-6xl sm:text-7xl md:text-7xl">
          <span
            className="hover:underline cursor-none mx-4 pb-5 text-violet-900"
            onMouseEnter={() => {
              mouseEnterHandler("TEMP-MARRY", "text-violet-900");
            }}
            onMouseLeave={mouseLeaveHandler}
          >
            MARRY
          </span>
          -
          <span
            className="cursor-none hover:underline mx-4 pb-5 text-red-600"
            onMouseEnter={() => {
              mouseEnterHandler("TEMP-LOVE", "text-red-600");
            }}
            onMouseLeave={mouseLeaveHandler}
          >
            LOVE
          </span>
          -
          <span
            className="cursor-none hover:underline  mx-4 pb-5 text-gray-600"
            onMouseEnter={() => {
              mouseEnterHandler("TEMP-FRIEND", "text-gray-600");
            }}
            onMouseLeave={mouseLeaveHandler}
          >
            FRIEND
          </span>
        </div>
      </div>
      <div className="text-center my-20 ">
        <Link
          to="/play"
          className=" rounded-2xl hover:bg-sky-200 hover:text-sky-600 hover:underline px-6 py-2 bg-sky-600 text-white text-5xl"
        >
          &gt;&gt; PLAY &gt;&gt;
        </Link>
      </div>
      {/* BODY-END */}
      {/* FOOTER */}
      {/* FOOTER END */}
    </div>
  );
};

export default Home;
