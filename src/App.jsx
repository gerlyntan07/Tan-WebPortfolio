import React, { useRef } from 'react';
import HeroImg from '/src/assets/hero-pic.png'
import Logo from '/src/assets/portfolio-logo.png';
import DarkMode from '/src/assets/icons8-dark-mode-50.png';
import Github from '/src/assets/github.png';
import Facebook from '/src/assets/facebook.png';
import Instagram from '/src/assets/instagram.png'
import MenuBtn from '/src/assets/icons8-menu-50.png'
import cv from '/src/assets/Gerlyn-Tan-CV.pdf';
import { Link } from 'react-scroll';

function App() {
    // Using useRef to access the DOM element
    const popupMenuRef = useRef(null);

    function openMenu() {
        if (popupMenuRef.current) {
            popupMenuRef.current.style.width = '100%';
        }
    }

    function closeMenu() {
        if (popupMenuRef.current) {
            popupMenuRef.current.style.width = '0%';
        }
    }

    return (
        <>
            <div id='body'>
                {/* POPUP MENU */}
                <div className='popup-menu' id='popupMenu' ref={popupMenuRef}>
                    <div className="popup-container">
                        <div className='popup-top'>
                            <img className='darkmode-popup' src={DarkMode} alt="menu button" />
                            <button className='closeBtn' onClick={closeMenu}>x</button>
                        </div>

                        <div className='popup-navBtn'>
                            <ul>
                                <li><a href="#hero" onClick={closeMenu}>Home</a></li>
                                <li><a href="#" onClick={closeMenu}>About</a></li>
                                <li><a href="#" onClick={closeMenu}>Projects</a></li>
                                <li><a href="#" onClick={closeMenu}>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* HEADER MENU */}
                <div id="nav">
                    <header>
                        <div>
                            <img className='gt-logo' src={Logo} alt="logo" />
                        </div>

                        <div className='nav-btn'>
                            <ul>
                                <li><a href="#hero">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <img className='darkmode-icon' src={DarkMode} alt="dark mode" />
                            <button id='menuBtn' onClick={openMenu}>
                                <img className='menuBtn' src={MenuBtn} alt="menu" />
                            </button>
                        </div>
                    </header>
                </div>

                {/* HERO SECTION */}
                <div id='hero'>
                    <div className='hero-text'>
                        <p className='hero-des'>Say <span>hello</span> to my <span>world</span>! I am</p>
                        <h1>GERLYN TAN</h1>
                        <p className='hero-des'>A passionate Computer Science student dedicated to building appealing, creative, and user-friendly projects. Let’s craft your ideas into reality!</p>
                        
                        <div className='hero-btn-links'>
                            <a href={cv} download='cv' className='dl-cv'>DOWNLOAD CV</a>
                            
                            <div className="links-section">
                                <a  href="https://github.com/gerlyntan07" target='_blank'><img className='link-icon' src={Github} alt="github logo" /></a>
                                <a  href="https://www.facebook.com/gerlyn.tan.50" target='_blank'><img className='link-icon' src={Facebook} alt="facebook logo" /></a>
                                <a  href="https://www.instagram.com/mehehehe__/" target='_blank'><img className='link-icon' src={Instagram} alt="instagram logo" /></a>
                            </div>
                        </div>
                    </div>

                    <div className='hero-img'>
                        <img src={HeroImg} className='hero' alt="hero image" />
                    </div>
                </div>

                {/* ABOUT SECTION */}
                <div id="about">
                    <div className="abt-container">
                        <div className="abt-content">
                            <p className="abt-skill">FRONT-END DEVELOPMENT</p>
                            <p className='skill-desc'>I always get the role of a front-end developer in group projects. I like to code things from scratch, and I enjoy crafting ideas to life.</p>
                            <p className="abt-tools">Language and Dev Tools:</p>

                            <ul className='tools-list'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>VS Code</li>
                            </ul>
                        </div>

                        <div className="line-separator">&nbsp;</div>

                        <div className="abt-content">
                            <p className="abt-skill">UI DESIGN</p>
                            <p className='skill-desc'>Arts is one thing I have been fond of doing since I was a kid. I love playing with colors and making simple yet appealing designs.</p>
                            <p className="abt-tools">Design Tools:</p>

                            <ul className='tools-list'>
                                <li>Figma</li>
                                <li>Canva</li>
                                <li>Inkscape</li>
                                <li>Pen & Paper</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default App;
