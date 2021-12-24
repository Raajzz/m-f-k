import React, { useState } from "react";
import { Link } from "react-router-dom";
//GiFrayedArrow
import welcome from "../img/WELCOME.png";
import family from "../img/FAMILY.png";
import familynobg from "../img/FAMILYNOBG.png";
import friend from "../img/FRIEND.png";
import friendnobg from "../img/FRIENDNOBG.png";
import foe from "../img/FOE.png";
import foenobg from "../img/FOENOBG.png";

import { AiOutlineArrowRight } from "react-icons/gi";

const Header = () => {
  return (
    <div className="grid grid-cols-2 mb-5 p-10">
      <div className=" font-bold text-2xl ">
        <Link
          to="/"
          className=" hover:underline decoration-blue-500 rounded-2xl border-2 border-slate-500 px-4"
        >
          <span className="text-violet-900">3</span>
          <span className="text-gray-600">-</span>
          <span className="text-red-600">PIC</span>
        </Link>
      </div>

      <div
        className=" font-bold text-2xl"
        style={{
          position: "absolute",
          right: "5vw",
          // left:"0px"
        }}
      >
        <Link
          to="/"
          className=" hover:underline decoration-blue-500 rounded-2xl border-2 border-slate-500 px-4"
        >
          <span className="text-violet-900">LOGIN</span>
        </Link>
      </div>

      <div
        className=" font-bold text-2xl"
        style={{
          display: "block",
          position: "absolute",
          right: "13vw",
          // left:"0px"
        }}
      >
        <Link
          to="/"
          className=" hover:underline decoration-blue-500 rounded-2xl border-2 border-slate-500 px-4"
        >
          <span className="text-red-600">SIGN UP</span>
        </Link>
      </div>
    </div>
  );
};

const Home = () => {
  const [message, setMessage] = useState(welcome);
  const [messageStyle, setMessageStyle] = useState("");

  const mouseEnterHandler = (messageParam, styleParam) => {
    setMessage(messageParam);
    setMessageStyle(styleParam);
  };

  const mouseLeaveHandler = () => {
    setMessage(welcome);
    setMessageStyle("");
  };

  return (
    <div>
      {/* HEADER BEGIN */}
      <Header />
      {/* HEADER END */}
      {/* BODY */}
      <div className="text-center"></div>
      <div
        // style={{
        //   "font-size": "7vw",
        // }}
        className="text-center text-7xl sm:text-8xl md:text-8xl font-semibold"
      >
        {/* <div className={messageStyle}>{message}</div> */}
        <img
          src={message}
          alt="welcome message"
          className=" object-cover w-9/12 mx-auto h-40"
        />
        <br />
        <div className=" grid grid-cols-3">
          <img
            src={familynobg}
            alt="family"
            className="cursor-none"
            onMouseEnter={() => {
              mouseEnterHandler(family, "text-green-600");
            }}
            onMouseLeave={mouseLeaveHandler}
          />
          <img
            src={friendnobg}
            alt="friend"
            className=" cursor-none"
            onMouseEnter={() => {
              mouseEnterHandler(friend, "text-yellow-500");
            }}
            onMouseLeave={mouseLeaveHandler}
          />
          <img
            src={foenobg}
            alt="foe"
            className="cursor-none"
            onMouseEnter={() => {
              mouseEnterHandler(foe, "text-red-700");
            }}
            onMouseLeave={mouseLeaveHandler}
          />
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
