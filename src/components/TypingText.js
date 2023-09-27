
import React, { useState, useEffect } from "react";

const TypingText = ({ text, speed, delay }) => {
  const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {    
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed, currentIndex]);

  return <div className="text">{displayedText}</div>;
};

export default TypingText;
