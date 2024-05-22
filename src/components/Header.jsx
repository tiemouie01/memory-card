/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

const Header = ({ scores }) => {
  const [dark, setDark] = useState(false);
  const { currentScore, highScore } = scores;

  // States for score change animations
  const [animate, setAnimate] = useState(false);
  const [animateHighScore, setAnimateHighScore] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  // useEffect hooks for triggering animations on score changes
  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 200); // Reset after 1s
    return () => clearTimeout(timer); // Clean up timer
  }, [currentScore]);

  useEffect(() => {
    setAnimateHighScore(true);
    const timer = setTimeout(() => setAnimateHighScore(false), 200); // Reset after 200ms
    return () => clearTimeout(timer); // Clean up timer
  }, [highScore]);

  return (
    <header className={`grid md:grid-cols-2 md:grid-rows-3 gap-4`}>
      <h1 className="text-4xl font-semibold flex items-center md:ml-4">
        Timmy&apos;s Movie Memory Cards
      </h1>
      <div className="md:col-start-2 justify-self-center md:justify-self-end flex gap-4 md:mr-4">
        <button>
          <a href="https://github.com/tiemouie01">
            <FaGithub size={25}/>
          </a>
        </button>
        <button onClick={() => darkModeHandler()}>
          {dark ? <IoSunny size={25} /> : <IoMoon size={25}/>}
        </button>
      </div>
      <p className="border text-xl font-semibold dark:text-slate-950 dark:bg-white rounded-xl shadow-lg flex justify-center items-center p-4 lg:ml-8">
        Current Score:{" "}
        <CSSTransition in={animate} timeout={100} classNames="score">
          <span className="m-1">{currentScore}</span>
        </CSSTransition>
        {currentScore === 1 ? "point" : "points"}
      </p>

      <p className="border text-xl font-semibold dark:text-slate-950 dark:bg-white rounded-xl shadow-lg flex justify-center items-center p-4 lg:mr-8">
        High Score:{" "}
        <CSSTransition in={animateHighScore} timeout={100} classNames="score">
          <span className="m-1">{highScore}</span>
        </CSSTransition>
        {highScore === 1 ? "point" : "points"}
      </p>
      <p className="md:col-span-2 flex justify-center items-center">
        Click on the images to get points. Your score will be reset if you click
        on an image more than once.
      </p>
    </header>
  );
};

export default Header;
