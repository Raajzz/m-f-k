import React, { useState } from "react";
import { Link } from "react-router-dom";
//GiFrayedArrow
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
          display:"block",
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
}

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
      <Header/>
      {/* HEADER END */}
      {/* BODY */}
      <div className="text-center">
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
