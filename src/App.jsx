import { useRef } from 'react';
import { useState } from 'react';
import HeroImg from '/src/assets/hero-pic.png'
import Logo from '/src/assets/portfolio-logo.png';
import DarkMode from '/src/assets/icons8-dark-mode-50.png';
import Github from '/src/assets/github.png';
import Facebook from '/src/assets/facebook.png';
import Instagram from '/src/assets/instagram.png'
import MenuBtn from '/src/assets/icons8-menu-50.png'
import cv from '/src/assets/Gerlyn-Tan-CV.pdf';
import ProjectCards from '/src/components/ProjectCards.jsx';
import Codev from '/src/assets/codev.png';
import CvSUWeb from '/src/assets/CvSU-Website.png';
import RecordsManagement from '/src/assets/student records management/1.png';
import AlumniTracker from '/src/assets/alumni tracking/1.png';
import HotelReserve from '/src/assets/hotel reservation/1.png';
import MiniMikimixCover from '/src/assets/mini mikimix/1.png';
import StudentRecordsSlider from '/src/components/StudentRecordsSlider.jsx';
import AlumniTracking from '/src/components/AlumniTracking.jsx';
import HotelReservation from '/src/components/HotelReservation.jsx';
import MiniMikimix from '/src/components/MiniMikimix.jsx';
import EnrollmentSystem from '/src/assets/es.png';
import ContactForm from '/src/components/ContactForm.jsx';
import GTLogo from '/src/assets/portfolio-logo.png';
import lightMode from '/src/assets/icons8-light-mode-50.png';
import { Link } from 'react-scroll';
import htmlIcon from '/src/assets/icons8-html-60.png';
import canvaIcon from '/src/assets/icons8-canva-60.png';
import cssIcon from '/src/assets/icons8-css-60.png';
import drawingIcon from '/src/assets/icons8-drawing-60.png';
import figmaIcon from '/src/assets/icons8-figma-60.png';
import inkscapeIcon from '/src/assets/icons8-inkscape-60.png';
import jsIcon from '/src/assets/icons8-javascript-60.png';
import reactIcon from '/src/assets/icons8-react-js-60.png';
import vsCodeIcon from '/src/assets/icons8-vs-code-60.png';
import node from '/src/assets/icons8-nodejs-60.png'
import light_node from '/src/assets/icons8-nodejs-60-white.png';
import va1 from '/src/assets/artworks/1.jpg';
import va2 from '/src/assets/artworks/2.jpg';
import va3 from '/src/assets/artworks/3.jpg';
import va4 from '/src/assets/artworks/4.jpg';
import va5 from '/src/assets/artworks/5.jpg';
import va6 from '/src/assets/artworks/6.jpg';
import va7 from '/src/assets/artworks/7.jpg';
import va8 from '/src/assets/artworks/8.jpg';
import va9 from '/src/assets/artworks/9.jpg';
import { Helmet } from 'react-helmet-async';

function App() {
    const [darkMode, setDark] = useState(false);

    const sliderContainer = useRef(null);
    const studentRecsSlider = useRef(null);
    const alumniTrackingSlider = useRef(null);
    const HotelReservationSlider = useRef(null);
    const MiniMikimixSlider = useRef(null);
    const darkIconBtn = useRef(null);
    const lightIconBtn = useRef(null);
    const darkIconBtnPopup = useRef(null);
    const lightIconBtnPopup = useRef(null);
    const heroTextRef = useRef(null);
    const linkRef = useRef(null);
    const toolListRef1 = useRef(null);
    const toolListRef2 = useRef(null);

    const setDarkMode = () => {
        setDark(true);
        darkIconBtn.current.style.display = 'none';
        lightIconBtn.current.style.display = 'flex';
        darkIconBtnPopup.current.style.display = 'none';
        lightIconBtnPopup.current.style.display = 'flex';

        const elements = heroTextRef.current.querySelectorAll('.hero-des');
        elements.forEach((el) => {
            el.classList.add('darkTextColor')
        })

        const elements1 = heroTextRef.current.querySelectorAll('.link-icon');
        elements1.forEach((el1) => {
            el1.classList.add('darkLinks')
        })

        const elements2 = toolListRef1.current.querySelectorAll('.toolsList');
        elements2.forEach((el2) => {
            el2.classList.add('darkTextColor')
        })
        const elements3 = toolListRef2.current.querySelectorAll('.toolsList');
        elements3.forEach((el3) => {
            el3.classList.add('darkTextColor')
        })

    }

    const setLightMode = () => {
        setDark(false);
        darkIconBtn.current.style.display = 'flex';
        lightIconBtn.current.style.display = 'none';
        darkIconBtnPopup.current.style.display = 'flex';
        lightIconBtnPopup.current.style.display = 'none';

        const elements = heroTextRef.current.querySelectorAll('.hero-des');
        elements.forEach((el) => {
            el.classList.remove('darkTextColor')
        })
        const elements1 = heroTextRef.current.querySelectorAll('.link-icon');
        elements1.forEach((el1) => {
            el1.classList.remove('darkLinks')
        })
        const elements2 = toolListRef1.current.querySelectorAll('.toolsList');
        elements2.forEach((el2) => {
            el2.classList.remove('darkTextColor')
        })
        const elements3 = toolListRef2.current.querySelectorAll('.toolsList');
        elements3.forEach((el3) => {
            el3.classList.remove('darkTextColor')
        })
    }

    const openStudentRecords = () => {
        sliderContainer.current.style.display = "flex";
        studentRecsSlider.current.style.display = "flex";
        document.body.style.overflow = 'hidden';
    }

    const openAlumniTracking = () => {
        sliderContainer.current.style.display = "flex";
        alumniTrackingSlider.current.style.display = "flex";
        document.body.style.overflow = 'hidden';
    }

    const openHotelReservation = () => {
        sliderContainer.current.style.display = "flex";
        HotelReservationSlider.current.style.display = "flex";
        document.body.style.overflow = 'hidden';
    }

    const openMiniMikimix = () => {
        sliderContainer.current.style.display = "flex";
        MiniMikimixSlider.current.style.display = "flex";
        document.body.style.overflow = 'hidden';
    }

    const closeSlider = () => {
        sliderContainer.current.style.display = "none";
        studentRecsSlider.current.style.display = "none";
        alumniTrackingSlider.current.style.display = "none";
        HotelReservationSlider.current.style.display = "none";
        MiniMikimixSlider.current.style.display = "none";

        document.body.style.overflow = 'auto';
    }

    const gotoES = () => {
        window.open('https://group4-enrollment-system-client.vercel.app/', '_blank');
    }
    const gotoCodev = () => {
        window.open('https://gerlyntan07.github.io/codev/', '_blank');
    }
    const gotoCvSUWeb = () => {
        window.open('https://gerlyntan07.github.io/group1_cvsuwebsite/', '_blank');
    }
    // Using useRef to access the DOM element
    const popupMenuRef = useRef(null);

    const openMenu = () => {
        if (popupMenuRef.current) {
            popupMenuRef.current.style.width = '100%';
        }
    }

    const closeMenu = () => {
        if (popupMenuRef.current) {
            popupMenuRef.current.style.width = '0%';
        }
    }

    {/* SEO */ }
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Gerlyn Tan",
        "jobTitle": "Front-End Developer",
        "url": "https://tan-web-portfolio.vercel.app",
        "image": "https://tan-web-portfolio.vercel.app/src/assets/portfolio-logo.png",
        "sameAs": [
            "https://github.com/gerlyntan07",
            "https://www.facebook.com/gerlyn.tan.50",
            "https://www.instagram.com/mehehehe__/"
        ],
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
        },
        "description": "Portfolio of a front-end developer and UI designer specializing in React.js."
    };

    return (
        <>
            <Helmet>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
                <title>Gerlyn Tan | Portfolio</title>
                <meta name="robots" content="index, follow" />
                <meta property="og:image" content="https://tan-web-portfolio.vercel.app/src/assets/portfolio-logo.png" />
                <meta property="og:url" content="https://tan-web-portfolio.vercel.app/" />
                <meta property="og:title" content="Gerlyn Tan | Front-End Developer" />
                <meta property="og:description" content="Portfolio of a skilled Front-End Developer and UI Designer with expertise in React.js." />
            </Helmet>

            <div className={`bodyContainer ${darkMode ? 'darkBody' : ''}`}>
                {/* POPUP IMAGE SLIDER */}
                <div className="image-slider" ref={sliderContainer}>
                    <div id="studentRecs-container" ref={studentRecsSlider}>
                        <button id='close-carousel' onClick={closeSlider}>x</button>
                        <StudentRecordsSlider />
                    </div>

                    <div id="alumniTracking-container" ref={alumniTrackingSlider}>
                        <button id='close-carousel' onClick={closeSlider}>x</button>
                        <AlumniTracking />
                    </div>

                    <div id="hotelReservation-container" ref={HotelReservationSlider}>
                        <button id='close-carousel' onClick={closeSlider}>x</button>
                        <HotelReservation />
                    </div>

                    <div id="miniMikimix-container" ref={MiniMikimixSlider}>
                        <button id='close-carousel' onClick={closeSlider}>x</button>
                        <MiniMikimix />
                    </div>
                </div>

                {/* POPUP MENU */}
                <div className={`popup-menu ${darkMode ? 'toggleDarkSection' : 'lightPopupMenuBG'}`} id='popupMenu' ref={popupMenuRef}>
                    <div className="popup-container">
                        <div className='popup-top'>
                            <button ref={darkIconBtnPopup} className='darkBtnPopup' onClick={setDarkMode}><img className='darkmode-popup' src={DarkMode} alt="dark mode" /></button>
                            <button ref={lightIconBtnPopup} className='lightBtnPopup' onClick={setLightMode}><img className='lightMode-popup' src={lightMode} alt="light mode" /></button>
                            <button className='closeBtn' onClick={closeMenu}>x</button>
                        </div>

                        <div className='popup-navBtn'>
                            <ul>
                                <li><Link className={`popup-list ${darkMode ? 'darkNavBtnBG' : 'lightNavBtnBG'}`} to='hero' spy={true} smooth={true} duration={700} onClick={closeMenu}>Home</Link></li>
                                <li><Link className={`popup-list ${darkMode ? 'darkNavBtnBG' : 'lightNavBtnBG'}`} to='about' offset={-70} spy={true} smooth={true} duration={700} onClick={closeMenu}>About</Link></li>
                                <li><Link className={`popup-list ${darkMode ? 'darkNavBtnBG' : 'lightNavBtnBG'}`} to='projects' offset={-70} spy={true} smooth={true} duration={700} onClick={closeMenu}>Projects</Link></li>
                                <li><Link className={`popup-list ${darkMode ? 'darkNavBtnBG' : 'lightNavBtnBG'}`} to='contact' offset={-150} spy={true} smooth={true} duration={700} onClick={closeMenu}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* HEADER MENU */}
                <div id="nav">
                    <header className={`header ${darkMode ? 'darkHeader' : ''}`}>
                        <div>
                            <img className='gt-logo' src={Logo} alt="Gerlyn Tan Logo" />
                        </div>

                        <div className='nav-btn'>
                            <ul>
                                <li><Link to='hero' spy={true} smooth={true} duration={700} className={`${darkMode ? 'darkTextColor' : ''}`}>Home</Link></li>
                                <li><Link to='about' offset={-100} spy={true} smooth={true} duration={700} className={`${darkMode ? 'darkTextColor' : ''}`}>About</Link></li>
                                <li><Link to='projects' offset={-100} spy={true} smooth={true} duration={700} href="#projects" className={`${darkMode ? 'darkTextColor' : ''}`}>Projects</Link></li>
                                <li><Link to='contact' offset={-200} spy={true} smooth={true} duration={700} className={`${darkMode ? 'darkTextColor' : ''}`}>Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <button ref={darkIconBtn} className='darkBtn' onClick={setDarkMode}><img className='darkmode-icon' src={DarkMode} alt="dark mode" /></button>
                            <button ref={lightIconBtn} className='lightBtn' onClick={setLightMode}><img className='lightMode-icon' src={lightMode} alt="light mode" /></button>
                            <button id='menuBtn' onClick={openMenu}>
                                <img className={`menuBtn ${darkMode ? 'darkLinks' : ''}`} src={MenuBtn} alt="Mobile Menu Bar" />
                            </button>
                        </div>
                    </header>
                </div>

                {/* HERO SECTION */}
                <div id='hero'>
                    <div className='hero-text' ref={heroTextRef}>
                        <p className='hero-des'>Say <span>hello</span> to my <span>world</span>! I am</p>
                        <h1 className={`heroName ${darkMode ? 'toggleLightBrown' : 'toggleDarkBrown'}`}>GERLYN TAN</h1>
                        <p className='hero-des'>A passionate Computer Science student dedicated to building appealing, creative, and user-friendly projects. Let’s craft your ideas into reality!</p>

                        <div className='hero-btn-links'>
                            <a href={cv} download='cv' className='dl-cv'>DOWNLOAD CV</a>

                            <div className="links-section" ref={linkRef}>
                                <a href="https://github.com/gerlyntan07" target='_blank'><img className='link-icon' src={Github} alt="Gerlyn Tan Github" /></a>
                                <a href="https://www.facebook.com/gerlyn.tan.50" target='_blank'><img className='link-icon' src={Facebook} alt="Gerlyn Tan Facebook" /></a>
                                <a href="https://www.instagram.com/mehehehe__/" target='_blank'><img className='link-icon' src={Instagram} alt="Gerlyn Tan Instagram" /></a>
                            </div>
                        </div>
                    </div>

                    <div className='hero-img'>
                        <img src={HeroImg} className='hero' alt="Profile Picture of Gerlyn Tan" />
                    </div>
                </div>

                {/* ABOUT SECTION */}
                <div id="about" className={darkMode ? 'toggleDarkSection' : 'toggleLightSection'}>

                    <div id="preCollege">
                        <div className="preCollege-desc-container">
                            <p className={`preCollege-desc ${darkMode ? 'darkTextColor' : ''}`}>Before becoming an aspiring developer, I once dreamt of becoming a great</p>
                            <p className={`vArtist-span ${darkMode ? 'darkTextColor' : ''}`}>artist</p>
                        </div>

                        <div className={`visualArts-gallery ${darkMode ? 'darkContainer' : 'abtContainerLight'}`}>
                            <div className="va-column">
                                <div className="va-photo">
                                    <img src={va1} alt="Son Chaeyoung drawing of Gerlyn Tan" />
                                </div>
                                <div className="va-photo">
                                    <img src={va4} alt="Family portrait artwork of Gerlyn Tan" />
                                </div>
                                <div className="va-photo">
                                    <img src={va9} alt="Glow art of Gerlyn Tan" />
                                </div>
                            </div>

                            <div className="va-column">
                                <div className="va-photo">
                                    <img src={va8} alt="Mount Fuji using acrylic artwork of Gerlyn Tan" />
                                </div>
                                <div className="va-photo">
                                    <img src={va5} alt="Graphite and Charcoal drawing of Gerlyn Tan" />
                                </div>
                                <div className="va-photo">
                                    <img src={va2} alt="Colored pencil drawing on Kraft paper of Gerlyn Tan" />
                                </div>
                            </div>

                            <div className="va-column">
                                <div className="va-photo">
                                    <img src={va3} alt="Son Chaeyoung-inspired pixelated art of Gerlyn Tan" />
                                </div>
                                <div className="va-photo">
                                    <img src={va6} alt="Family portrait artwork of Gerlyn Tan" />
                                </div>
                                <div className="va-photo">
                                    <img src={va7} alt="Glow art of Gerlyn Tan" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='skillsIntro'>
                        <p className={`skillsIntro-txt ${darkMode ? 'darkTextColor' : ''}`}>I now found new challenge in developing, creating, and building computer graphics, software, and applications. I am happy to use my years of experience in the arts in this field.</p>
                    </div>

                    <div id="abt-container" className={`abtContainerLight ${darkMode ? 'darkContainer' : ''}`}>
                        <div className="abt-content">
                            <p className={`abt-skill ${darkMode ? 'darkTextColor' : ''}`}>FULL-STACK DEVELOPMENT</p>
                            <p className={`skill-desc ${darkMode ? 'darkTextColor' : ''}`}>I often get the role of both front-end and back-end developer in group projects. I enjoy coding things from scratch, building seamless user experiences, and crafting ideas to life.</p>
                            <p className={`abt-tools ${darkMode ? 'toggleLightBrown' : 'toggleDarkBrown'}`}>Language and Dev Tools:</p>

                            <ul className='tools-list' ref={toolListRef1}>
                                <li className='toolsList'><img src={darkMode ? light_node : node} alt="Node JS Icon" />Node</li>
                                <li className='toolsList'><img src={htmlIcon} alt="HTML Icon" />HTML</li>
                                <li className='toolsList'><img src={cssIcon} alt="CSS Icon" />CSS</li>
                                <li className='toolsList'><img src={jsIcon} alt="JavaScript Icon" />JavaScript</li>
                                <li className='toolsList'><img src={reactIcon} alt="React JS Icon" />React</li>
                                <li className='toolsList'><img src={vsCodeIcon} alt="VS Code Icon" />VS Code</li>
                            </ul>
                        </div>

                        <div className={`line-separator ${darkMode ? 'toggleDarkSection' : 'toggleLightSection'}`}>&nbsp;</div>

                        <div className="abt-content">
                            <p className={`abt-skill ${darkMode ? 'darkTextColor' : ''}`}>UI DESIGN</p>
                            <p className={`skill-desc ${darkMode ? 'darkTextColor' : ''}`}>Art is one thing I have been fond of doing since I was a kid. I love playing with colors and making simple yet appealing designs.</p>
                            <p className={`abt-tools ${darkMode ? 'toggleLightBrown' : 'toggleDarkBrown'}`}>Design Tools:</p>

                            <ul className='tools-list' ref={toolListRef2}>
                                <li className='toolsList'><img src={figmaIcon} alt="Figma Icon" />Figma</li>
                                <li className='toolsList'><img src={canvaIcon} alt="Canva icon" />Canva</li>
                                <li className='toolsList'><img src={inkscapeIcon} alt="Inkscape Icon" />Inkscape</li>
                                <li className='toolsList'><img src={drawingIcon} alt="Drawing Icon" />Pen & Paper</li>
                            </ul>
                        </div>
                    </div>
                </div>



                {/* PROJECTS SECTION */}
                <div id="projects">
                    <div className="projects-top">
                        <h2 className={`${darkMode ? 'darkTextColor' : ''}`}>PROJECTS</h2>
                        <p className={`project-desc ${darkMode ? 'darkTextColor' : ''}`}>These are the individual school projects I have worked on and the group school projects I participated in.</p>
                    </div>

                    <div className="projects-bot">
                        <ProjectCards img={EnrollmentSystem} viewOn={gotoES} title="Enrollment System" description="Designed an enrollment system for CvSU - Bacoor Department of Computer Studies, allowing students, officers, and administrators to handle enrollment with ease." date="January 2025" language="React.js, Node.js, SQL" darkMode={darkMode} />
                        <ProjectCards img={Codev} viewOn={gotoCodev} title="Codev IT Company" description="Designed and developed a professional website for a hypothetical IT company, focusing on modern UI/UX principles to showcase services and team expertise." date="November 2023" language="HTML/CSS" darkMode={darkMode} />
                        <ProjectCards img={CvSUWeb} viewOn={gotoCvSUWeb} title="CvSU Website" description="Created a responsive and user-friendly website for Cavite State University, emphasizing clear navigation for students and faculty." date="October 2023" language="HTML/CSS" darkMode={darkMode} />
                        <ProjectCards img={RecordsManagement} viewOn={openStudentRecords} title="Student Records" description="Developed a secure, efficient system to manage and retrieve student records, and enhancing data organization." date="June 2024" language="HTML/CSS, JavaScript, PHP" darkMode={darkMode} />
                        <ProjectCards img={AlumniTracker} viewOn={openAlumniTracking} title="Alumni Tracking System" description="Built a platform for tracking alumni, enabling networking, and institutional engagement with graduates." date="January 2024" language="HTML/CSS, PHP" darkMode={darkMode} />                        
                        <ProjectCards img={MiniMikimixCover} viewOn={openMiniMikimix} title="Mini Mikimix" description="Created an order and capital management solution for Mini Mikimix, optimizing order tracking, and financial management." date="January 2024" language="Java" darkMode={darkMode} />
                    </div>
                </div>

                { /* CONTACT SECTION */}
                <div id="contact" className={darkMode ? 'toggleDarkSection' : 'toggleLightSection'}>
                    <div id="contact-wrapper" className={`contactWrapperLight ${darkMode ? 'darkContainer' : 'contactWrapperLight'}`}>
                        <div className="contact-top">
                            <h2 className={`${darkMode ? 'darkTextColor' : ''}`}>CONTACT ME</h2>
                            <p className={`contact-desc ${darkMode ? 'darkTextColor' : ''}`}>Thanks for taking the time to reach this part. How may I help you?</p>
                        </div>

                        <div className="contact-bot">
                            <ContactForm darkMode={darkMode} />
                        </div>
                    </div>
                </div>

                <footer id='footer'>
                    <img className='footer-logo' src={GTLogo} alt="Gerlyn Tan Logo" />
                    <p className={`footer-tagline ${darkMode ? 'darkTextColor' : ''}`}><span className={darkMode ? 'toggleLightBrown' : 'toggleDarkBrown'}>G</span>rowing Talent,</p>
                    <p className={`footer-tagline ${darkMode ? 'darkTextColor' : ''}`}><span className={darkMode ? 'toggleLightBrown' : 'toggleDarkBrown'}>T</span>urning Ideas into Reality</p>
                    <p className={`copyright ${darkMode ? 'darkCopyright' : 'lightCopyright'}`}>Copyright &copy; 2024 Gerlyn Tan</p>
                </footer>
            </div>
        </>
    );
}

export default App;
