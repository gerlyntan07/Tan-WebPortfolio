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
import ContactForm from '/src/components/ContactForm.jsx';
import GTLogo from '/src/assets/portfolio-logo.png';
import lightMode from '/src/assets/icons8-light-mode-50.png';
import { Link } from 'react-scroll';


function App() {
    const [darkMode, setDark] = useState(false);

    const sliderContainer = useRef(null);
    const studentRecsSlider = useRef(null);
    const alumniTrackingSlider = useRef(null);
    const bodyContainer = useRef(null);
    const HotelReservationSlider = useRef(null);
    const MiniMikimixSlider = useRef(null);
    const darkIconBtn = useRef(null);
    const lightIconBtn = useRef(null);
    const darkIconBtnPopup = useRef(null);
    const lightIconBtnPopup = useRef(null);
    const headerRef = useRef(null);
    const heroTextRef = useRef(null);
    const heroNameRef = useRef(null);
    const linkRef = useRef(null);
    const aboutRef = useRef(null);
    const aboutLineRef = useRef(null);
    const toolListRef1 = useRef(null);
    const toolListRef2 = useRef(null);
    const contactRef = useRef(null);

    function setDarkMode(){
        setDark(true);
        darkIconBtn.current.style.display = 'none';
        lightIconBtn.current.style.display = 'flex';
        darkIconBtnPopup.current.style.display = 'none';
        lightIconBtnPopup.current.style.display = 'flex';
        headerRef.current.classList.add('darkHeader');
        bodyContainer.current.classList.add('darkBody');
        heroNameRef.current.style.color = 'var(--lightBrown)';
        aboutRef.current.style.background = 'var(--sectionClrDark)';
        aboutLineRef.current.style.background = 'var(--sectionClrDark)';
        contactRef.current.style.background = 'var(--sectionClrDark)';

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

    function setLightMode(){
        setDark(false);
        darkIconBtn.current.style.display = 'flex';
        lightIconBtn.current.style.display = 'none';
        darkIconBtnPopup.current.style.display = 'flex';
        lightIconBtnPopup.current.style.display = 'none';
        headerRef.current.classList.remove('darkHeader');
        bodyContainer.current.classList.remove('darkBody');
        heroNameRef.current.style.color = 'var(--darkBrown)';
        aboutRef.current.style.background = 'var(--sectionClrLight)';
        aboutLineRef.current.style.background = 'var(--sectionClrLight)';
        contactRef.current.style.background = 'var(--sectionClrLight)';

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

    function openStudentRecords() {
        sliderContainer.current.style.display = "flex";
        studentRecsSlider.current.style.display = "flex";
    }

    function openAlumniTracking() {
        sliderContainer.current.style.display = "flex";
        alumniTrackingSlider.current.style.display = "flex";
    }

    function openHotelReservation() {
        sliderContainer.current.style.display = "flex";
        HotelReservationSlider.current.style.display = "flex";
    }

    function openMiniMikimix() {
        sliderContainer.current.style.display = "flex";
        MiniMikimixSlider.current.style.display = "flex";
    }

    function closeSlider() {
        sliderContainer.current.style.display = "none";
        studentRecsSlider.current.style.display = "none";
        alumniTrackingSlider.current.style.display = "none";
        HotelReservationSlider.current.style.display = "none";
        MiniMikimixSlider.current.style.display = "none";
    }

    function gotoCodev() {
        window.open('https://gerlyntan07.github.io/codev/', '_blank');
    }
    function gotoCvSUWeb() {
        window.open('https://gerlyntan07.github.io/group1_cvsuwebsite/', '_blank');
    }
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
            <div id='body' ref={bodyContainer}>
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
                <div className={`popup-menu ${darkMode ? 'darkPopupMenuBG' : 'lightPopupMenuBG'}`} id='popupMenu' ref={popupMenuRef}>
                    <div className="popup-container">
                        <div className='popup-top'>
                            <button ref={darkIconBtnPopup} className='darkBtnPopup' onClick={setDarkMode}><img className='darkmode-popup' src={DarkMode} alt="dark mode" /></button>
                            <button ref={lightIconBtnPopup} className='lightBtnPopup' onClick={setLightMode}><img className='lightMode-popup' src={lightMode} alt="light mode" /></button>
                            <button className='closeBtn' onClick={closeMenu}>x</button>
                        </div>

                        <div className='popup-navBtn'>
                            <ul>
                                <li><Link to='hero' spy={true} smooth={true} duration={700} onClick={closeMenu}>Home</Link></li>
                                <li><Link to='about' offset={-70} spy={true} smooth={true} duration={700} onClick={closeMenu}>About</Link></li>
                                <li><Link to='projects' offset={-70} spy={true} smooth={true} duration={700} onClick={closeMenu}>Projects</Link></li>
                                <li><Link to='contact' offset={-150} spy={true} smooth={true} duration={700} onClick={closeMenu}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* HEADER MENU */}
                <div id="nav">
                    <header ref={headerRef}>
                        <div>
                            <img className='gt-logo' src={Logo} alt="logo" />
                        </div>

                        <div className='nav-btn'>
                            <ul>
                                <li><Link to='hero' spy={true} smooth={true} duration={700} className={`${darkMode ? 'darkTextColor' : ''}`}>Home</Link></li>
                                <li><Link to='about' offset={-250} spy={true} smooth={true} duration={700} className={`${darkMode ? 'darkTextColor' : ''}`}>About</Link></li>
                                <li><Link to='projects' offset={-100} spy={true} smooth={true} duration={700} href="#projects" className={`${darkMode ? 'darkTextColor' : ''}`}>Projects</Link></li>
                                <li><Link to='contact' offset={-200} spy={true} smooth={true} duration={700} className={`${darkMode ? 'darkTextColor' : ''}`}>Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <button ref={darkIconBtn} className='darkBtn' onClick={setDarkMode}><img className='darkmode-icon' src={DarkMode} alt="dark mode" /></button>
                            <button ref={lightIconBtn} className='lightBtn' onClick={setLightMode}><img className='lightMode-icon' src={lightMode} alt="light mode" /></button>
                            <button id='menuBtn' onClick={openMenu}>
                                <img className={`menuBtn ${darkMode ? 'darkLinks' : ''}`} src={MenuBtn} alt="menu" />
                            </button>
                        </div>
                    </header>
                </div>

                {/* HERO SECTION */}
                <div id='hero'>
                    <div className='hero-text' ref={heroTextRef}>
                        <p className='hero-des'>Say <span>hello</span> to my <span>world</span>! I am</p>
                        <h1 ref={heroNameRef}>GERLYN TAN</h1>
                        <p className='hero-des'>A passionate Computer Science student dedicated to building appealing, creative, and user-friendly projects. Let’s craft your ideas into reality!</p>

                        <div className='hero-btn-links'>
                            <a href={cv} download='cv' className='dl-cv'>DOWNLOAD CV</a>

                            <div className="links-section" ref={linkRef}>
                                <a href="https://github.com/gerlyntan07" target='_blank'><img className='link-icon' src={Github} alt="github logo" /></a>
                                <a href="https://www.facebook.com/gerlyn.tan.50" target='_blank'><img className='link-icon' src={Facebook} alt="facebook logo" /></a>
                                <a href="https://www.instagram.com/mehehehe__/" target='_blank'><img className='link-icon' src={Instagram} alt="instagram logo" /></a>
                            </div>
                        </div>
                    </div>

                    <div className='hero-img'>
                        <img src={HeroImg} className='hero' alt="hero image" />
                    </div>
                </div>

                {/* ABOUT SECTION */}
                <div id="about" ref={aboutRef}>
                    <div id="abt-container" className={`abtContainerLight ${darkMode ? 'darkContainer' : ''}`}>
                        <div className="abt-content">
                            <p className={`abt-skill ${darkMode ? 'darkTextColor' : ''}`}>FRONT-END DEVELOPMENT</p>
                            <p className={`skill-desc ${darkMode ? 'darkTextColor' : ''}`}>I always get the role of a front-end developer in group projects. I like to code things from scratch, and I enjoy crafting ideas to life.</p>
                            <p className={`abt-tools ${darkMode ? 'toggleLightBrown' : ''}`}>Language and Dev Tools:</p>

                            <ul className='tools-list' ref={toolListRef1}>
                                <li className='toolsList'>HTML</li>
                                <li className='toolsList'>CSS</li>
                                <li className='toolsList'>JavaScript</li>
                                <li className='toolsList'>React</li>
                                <li className='toolsList'>VS Code</li>
                            </ul>
                        </div>

                        <div className="line-separator" ref={aboutLineRef}>&nbsp;</div>

                        <div className="abt-content">
                            <p className={`abt-skill ${darkMode ? 'darkTextColor' : ''}`}>UI DESIGN</p>
                            <p className={`skill-desc ${darkMode ? 'darkTextColor' : ''}`}>Arts is one thing I have been fond of doing since I was a kid. I love playing with colors and making simple yet appealing designs.</p>
                            <p className={`abt-tools ${darkMode ? 'toggleLightBrown' : ''}`}>Design Tools:</p>

                            <ul className='tools-list' ref={toolListRef2}>
                                <li className='toolsList'>Figma</li>
                                <li className='toolsList'>Canva</li>
                                <li className='toolsList'>Inkscape</li>
                                <li className='toolsList'>Pen & Paper</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* HEADER MENU */}
                <div id="projects">
                    <div className="projects-top">
                        <h2 className={`${darkMode ? 'darkTextColor' : ''}`}>PROJECTS</h2>
                        <p className={`project-desc ${darkMode ? 'darkTextColor' : ''}`}>These are the individual school projects I have worked on and the group school projects I participated in.</p>
                    </div>

                    <div className="projects-bot">
                        <ProjectCards img={Codev} viewOn={gotoCodev} title="Codev IT Company" description="Marketing the services offered by an IT company" date="November 2023" language="HTML/CSS" darkMode={darkMode} />
                        <ProjectCards img={CvSUWeb} viewOn={gotoCvSUWeb} title="CvSU Website" description="Landing page for CvSU - Bacoor City campus website" date="October 2023" language="HTML/CSS" darkMode={darkMode} />
                        <ProjectCards img={RecordsManagement} viewOn={openStudentRecords} title="Student Records" description="System for course and grades management" date="June 2024" language="HTML/CSS, JavaScript, PHP" darkMode={darkMode} />
                        <ProjectCards img={AlumniTracker} viewOn={openAlumniTracking} title="Alumni Tracking System" description="Tracking alumni and recording their information" date="January 2024" language="HTML/CSS, PHP" darkMode={darkMode} />
                        <ProjectCards img={HotelReserve} viewOn={openHotelReservation} title="Hotel Reservation" description="Be able to book rooms at Hilton" date="January 2023" language="ASP.Net" darkMode={darkMode} />
                        <ProjectCards img={MiniMikimixCover} viewOn={openMiniMikimix} title="Mini Mikimix" description="Manage and record orders" date="January 2024" language="Java" darkMode={darkMode} />
                    </div>
                </div>

                <div id="contact" ref={contactRef}>
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
                    <img className='footer-logo' src={GTLogo} alt="" />
                    <p className={`footer-tagline ${darkMode ? 'darkTextColor' : ''}`}><span>G</span>rowing Talent,</p>
                    <p className={`footer-tagline ${darkMode ? 'darkTextColor' : ''}`}><span>T</span>urning Ideas into Reality</p>
                    <p className={`copyright ${darkMode ? 'darkCopyright' : 'lightCopyright'}`}>Copyright &copy; 2024 Gerlyn Tan</p>
                </footer>
            </div>
        </>
    );
}

export default App;
