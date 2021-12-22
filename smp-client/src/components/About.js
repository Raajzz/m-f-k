import react from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className="m-10">
      <div className="text-center text-7xl sm:text-8xl md:text-9xl font-semibold my-10 underline hover:no-underline hover:cursor-none">
        ABOUT <span className="text-violet-900">3</span>
        <span className="text-gray-600">-</span>
        <span className="text-red-600">PIC</span>{" "}
      </div>
      <br />
      <div className=" text-xl md:text-2xl font-medium text-left md:max-w-3xl mx-auto tracking-wide">
        Hey there! I'm <a href="https://github.com/Raajzz" className='for-links'>Raaj</a>, this project
        was inspired from a game played between the characters of{" "}
        <a
          href="https://www.skybound.com/telltales-the-walking-dead-season-4"
          className="for-links"
        >
          Telltale's The Walking Dead season 4
        </a>{" "}
        <a
          href="https://walkingdead.fandom.com/wiki/Broken_Toys"
          className=" for-links"
        >
          Broken Toys
        </a>{" "}
        albeit a family friendly version displayed here compared to the game, I
        wanted to make a full-stack application out of it. I used{" "}
        <a href="https://reactjs.org/" className=" for-links">
          ReactJS
        </a>{" "}
        and{" "}
        <a href="https://tailwindcss.com/" className=" for-links">
          TailwindCSS
        </a>{" "}
        for the front-end. {" "}
        <a href="https://nodejs.org/" className="for-links">
          NodeJS
        </a>{" "}
        [{" "}
        <a href="https://expressjs.com/" className="for-links">
          expressJS
        </a>{" "}
        ] for the back-end. Finally,{" "}
        <a href="https://www.mysql.com/" className="for-links">
          MySql
        </a>{" "}
        for the database.
        <div className="text-center mt-12 text-md">You can find me at</div>
        <div className='text-center'>
          <a href="https://github.com/Raajzz" className="for-links">
            Twitter
          </a>{" "}
          
          <a href="https://github.com/Raajzz" className="for-links">
            LinkedIn
          </a>{" "}
          
          <a href="https://github.com/Raajzz" className="for-links">
            GitHub
          </a>{" "}

          <a href="https://github.com/Raajzz" className="for-links">
            Dev.to
          </a>{" "}
        </div>

      </div>
    </div>
  );
}

export default About;