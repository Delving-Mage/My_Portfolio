import React, { useState, useEffect } from 'react';
import moonLaughing from '../assets/profile.png';
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";



export const HomePage = () => {
  const texts = ["Frontend developer", "Web designer", "React developer"];
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCursor((prev) => !prev); // Toggle cursor
      if (charIndex < texts[wordIndex].length) {
        setDisplayText((prevText) => prevText + texts[wordIndex][charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      } else if (displayText.length > 0) {
        setDisplayText((prevText) => prevText.slice(0, -1)); // Remove one character
      } else if (wordIndex < texts.length - 1) {
        setCharIndex(0);
        setWordIndex((prevIndex) => prevIndex + 1);
        setDisplayText('');
      } else {
        setCharIndex(0);
        setWordIndex(0);
        setDisplayText('');
      }
    }, 150); // Adjust typing speed here

    return () => clearTimeout(timer);
  }, [charIndex, wordIndex, displayText]);

  return (
    <>
      <div className="home">
        <div className="home-content"> {/* Container for text */}
          <h3>Hello, It's Me</h3>
          <h1> Ajaykumar Mandla</h1>
          <h3 className="typed-text"> {/* Container for typed text */}
            And I'm a <span className="typed-out">{displayText}</span><span className="cursor">{showCursor ? '|' : ''}</span>
          </h3>
          <p>I'm a Web Developer with extensive experience for over 3 years 
            <br/> expertise in Reactjs and other javascript frameworks...!
          </p>
          <div className='home-sci'>
            <a target="_blank" href='https://www.linkedin.com/in/ajaykumar-/'><SiLinkedin /></a>
            <a target="_blank" href='https://github.com/Delving-Mage'><FaGithub /></a>
            <a target="_blank" href='https://www.instagram.com/prince_of_the_victory'><FaInstagram/></a>
            <a target="_blank" href='mailto:ajaysagar853@gmail.com'><BiLogoGmail/></a>
          </div>
          <a href='' className='btn-box'>More About Me</a>
        </div>
        <div className="image-container"> {/* Container for image */}
          <img src={moonLaughing} alt="Your Image" className="round-image" />
        </div>
      </div>
    </>
  );
};
