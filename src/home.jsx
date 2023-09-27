
import React, { useState, useEffect } from 'react';
import TypingText from "./components/TypingText";


function Home() {
    const [firstComponentReady, setFirstComponentReady] = useState(false);
    const [secondComponentReady, setSecondComponentReady] = useState(false);
    const [thirdComponentReady, setThirdComponentReady] = useState(false);
    const [webTheme, setWebTheme] = useState(false);
    

  useEffect(() => {
    setTimeout(() => {
      setFirstComponentReady(true);
    }, 500); 
  }, []);

  useEffect(() => {
    if (firstComponentReady) {
      setTimeout(() => {
        setSecondComponentReady(true);
      }, 500); 
    }
  }, [firstComponentReady]);
    
    useEffect(() => {
    if (secondComponentReady) {
      setTimeout(() => {
        setThirdComponentReady(true);
      }, 1000); 
    }
  }, [secondComponentReady]);

    return (
    <>
            <div className={webTheme ? "Navbar-white" : "Navbar-black"}>
                <div className="nav">
                    <div className={webTheme ? "nav-white-active" : "nav-black-active"}><a>Home.html</a></div>
                <div className={webTheme ? "nav-white-link" : "nav-black-link"}><a>Projects.css</a></div>
                <div className={webTheme ? "nav-white-link" : "nav-black-link"}><a>Resume.js</a></div>
                <div className={webTheme ? "nav-white-link" : "nav-black-link"}><a>Contact.jsx</a></div>
            </div>
                <div className="btn">
                    <input type="checkbox" id="switch" onClick={() => setWebTheme(!webTheme)} />
                    <label for="switch"></label>
                </div>
            
    </div>   
    <div className={webTheme ? "whiteHeader" : "Header"}>
        

        <span className="Hello"><FirstComponent className="text" /></span>        
                
        
      {secondComponentReady ? (
        <SecondComponent className="text"/>
      ) : (
        <p></p>
          )}
      {thirdComponentReady ? (
        <ThirdComponent className="text"/>
                ) : (<p></p>)}
            </div>
            
         <i className="fa fa-sort-down" />   
    </>
  );
}

function FirstComponent() {
  return <TypingText className="name" text="<h1> Hello World </h1>" speed={25} />;
}

function SecondComponent() {
  return <TypingText className="name" text="<name> Zabdiel Bronola </name>" speed={25}/>;
}

function ThirdComponent() {
  return <TypingText className="name" text="<title> Software Engineer Student </title>" speed={25}/>;
}

export default Home;
