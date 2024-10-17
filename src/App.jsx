import { useRef } from 'react';
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


function App() {
    const sliderContainer = useRef(null);
    const studentRecsSlider = useRef(null);
    const alumniTrackingSlider = useRef(null);
    const bodyContainer = useRef(null);
    const HotelReservationSlider = useRef(null);
    const MiniMikimixSlider = useRef(null);

    function openStudentRecords(){
        sliderContainer.current.style.display = "flex";
        studentRecsSlider.current.style.display = "flex";
    }

    function openAlumniTracking(){
        sliderContainer.current.style.display = "flex";
        alumniTrackingSlider.current.style.display = "flex";
    }

    function openHotelReservation(){
        sliderContainer.current.style.display = "flex";
        HotelReservationSlider.current.style.display = "flex";
    }

    function openMiniMikimix(){
        sliderContainer.current.style.display = "flex";
        MiniMikimixSlider.current.style.display = "flex";
    }

    function closeSlider(){
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
                <div className='popup-menu' id='popupMenu' ref={popupMenuRef}>
                    <div className="popup-container">
                        <div className='popup-top'>
                            <img className='darkmode-popup' src={DarkMode} alt="dark mode icon" />
                            <button className='closeBtn' onClick={closeMenu}>x</button>
                        </div>

                        <div className='popup-navBtn'>
                            <ul>
                                <li><a href="#hero" onClick={closeMenu}>Home</a></li>
                                <li><a href="#about" onClick={closeMenu}>About</a></li>
                                <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
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
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#contact">Contact</a></li>
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

                {/* HEADER MENU */}
                <div id="projects">
                    <div className="projects-top">
                        <h2>PROJECTS</h2>
                        <p className="project-desc">These are the individual school projects I have worked on and the group school projects I participated in.</p>
                    </div>

                    <div className="projects-bot">
                        <ProjectCards img={Codev} viewOn={gotoCodev} title="Codev IT Company" description="Marketing the services offered by an IT company" date="November 2023" language="HTML/CSS" />
                        <ProjectCards img={CvSUWeb} viewOn={gotoCvSUWeb} title="CvSU Website" description="Landing page for CvSU - Bacoor City campus website" date="October 2023" language="HTML/CSS" />
                        <ProjectCards img={RecordsManagement} viewOn={openStudentRecords} title="Student Records" description="System for course and grades management" date="June 2024" language="HTML/CSS, JavaScript, PHP" />
                        <ProjectCards img={AlumniTracker} viewOn={openAlumniTracking} title="Alumni Tracking System" description="Tracking alumni and recording their information" date="January 2024" language="HTML/CSS, PHP" />
                        <ProjectCards img={HotelReserve} viewOn={openHotelReservation} title="Hotel Reservation" description="Be able to book rooms at Hilton" date="January 2023" language="ASP.Net" />
                        <ProjectCards img={MiniMikimixCover} viewOn={openMiniMikimix} title="Mini Mikimix" description="Manage and record orders" date="January 2024" language="Java" />
                    </div>
                    <ContactForm />
                </div>

            </div>
        </>
    );
}

export default App;
