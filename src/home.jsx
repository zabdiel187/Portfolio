
import React, { useState, useEffect } from 'react';
import TypingText from "./components/TypingText";


function Home() {
    const [firstComponentReady, setFirstComponentReady] = useState(false);
    const [secondComponentReady, setSecondComponentReady] = useState(false);
    const [thirdComponentReady, setThirdComponentReady] = useState(false);
    const [whiteTheme, setWebTheme] = useState(false);
    const [iconReady, setIconReady] = useState(false);

    const [homePage, setHomePage] = useState(true)
    const [projectPage, setProjectPage] = useState(false);
    const [resumePage, setResumePage] = useState(false);
    const [contactPage, setContactPage] = useState(false);

    

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
    
    useEffect(() => {
        if (thirdComponentReady) {
            setTimeout(() => {
                setIconReady(true);
            }, 1500); 
        }
    }, [thirdComponentReady]);

    const handleHomePage = () => {
        setHomePage(true);
        setProjectPage(false);
        setResumePage(false);
        setContactPage(false);
    }

    const handleProjectPage = () => {
        setHomePage(false);
        setProjectPage(true);
        setResumePage(false);
        setContactPage(false)
    }

    const handleResumePage = () => {
        setHomePage(false)
        setProjectPage(false);
        setResumePage(true);
        setContactPage(false);
    }

    const handleContactPage = () => {
        setHomePage(false);
        setProjectPage(false);
        setResumePage(false);
        setContactPage(true);
    }

    return (
        <>
            <div className={whiteTheme ? "Navbar-white" : "Navbar-black"}>
                    <div className="nav">
                        <div className={ homePage ? whiteTheme ? "nav-white-active" : "nav-black-active" : whiteTheme ? "nav-white-link" : "nav-black-link"} onClick={() => handleHomePage()}>home.html</div>
                        <div className={ projectPage ? whiteTheme ? "nav-white-active" : "nav-black-active" : whiteTheme ? "nav-white-link" : "nav-black-link"} onClick={()=> handleProjectPage()}>projects.css</div>
                        <div className={ resumePage ? whiteTheme ? "nav-white-active" : "nav-black-active" : whiteTheme ? "nav-white-link" : "nav-black-link"} onClick= {() => handleResumePage()}>resume.js</div>
                        <div className={ contactPage ? whiteTheme ? "nav-white-active" : "nav-black-active" : whiteTheme ? "nav-white-link" : "nav-black-link"} onClick= { () => handleContactPage()}>contact.jsx</div>
                    </div>

                    <div className="btn">
                        <input type="checkbox" id="switch" onClick={() => setWebTheme(!whiteTheme)} />
                        <label for="switch"></label>
                    </div>
            </div>
            
            <div className={homePage ? "homePage-active" : "homePage"}>
                <div className="container">
                    <div className={whiteTheme ? "whiteHeader" : "Header"}>
                        <span className="Hello"><FirstComponent className="text" /></span>        
                        {secondComponentReady ? ( <SecondComponent className="text"/>) : ( <p></p> )}
                        {thirdComponentReady ? (<ThirdComponent className="text" />) : (<p></p>)}
                    </div>
                </div>
            </div>

            <div className={projectPage ? "projectsPage-active" : "projectsPage"}>
                <div className="container">
                    <h1> Projects Page</h1>
                </div>
            </div>

            <div className={resumePage ? "resumePage-active" : "resumePage"}>
                <div className="container">
                    <h1>Resume Page</h1>
                </div>
            </div>

            <div className={ contactPage ? "contactPage-active" : "contactPage"}>
                <div className="container">
                    <h1>Contact Page</h1>
                </div>
            </div>
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
