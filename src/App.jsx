import { useRef } from 'react';
import { useState } from 'react';
import HeroImg from '/src/assets/hero-pic.png'
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import cv from '/src/assets/Gerlyn-Tan-CV.pdf';
import Codev from '/src/assets/codev.png';
import EnrollmentSystem from '/src/assets/cvsu-es.png';
import ContactForm from '/src/components/ContactForm.jsx';
import GTLogo from '/src/assets/portfolio-logo.png';
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
import Artworks from './components/Artworks';
import { Helmet } from 'react-helmet-async';
import Header from '/src/components/Header.jsx'
import Marquee from "react-fast-marquee";
import mysql from '/src/assets/icons8-mysql-60.png';
import php from '/src/assets/icons8-php-logo-60.png';
import krita from '/src/assets/krita.png'
import ProjectCards from './components/ProjectCards';
import cdjCover from '/src/assets/cafe-de-jur.png';
import mpCover from '/src/assets/mobile-portfolio.jpg';
import fnCover from '/src/assets/finding-needmo.png';
import LightShop from '/src/assets/light-shop.png';

function App() {
    const [darkMode, setDark] = useState(false);

    const toggleDarkMode = () => {
        setDark(prevMode => !prevMode);
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

    const cafeDeJur = [
        { name: 'React.js' },
        { name: 'Tailwind CSS' },
        { name: 'Node.js' },
        { name: 'MySQL' }
    ];

    const viewCadeDeJur = () => {
        window.open('https://youtu.be/ltn0V_MQY1M');
    }

    const mobilePortfolioStacks = [
        { name: 'Expo React Native' },
        { name: 'Tailwind CSS' },
    ]

    const viewMobielPortfolio = () => {
        window.open('https://drive.google.com/drive/folders/1LoQeWPuEagl397hbfpjdva3YPu9GQ3G6?usp=drive_link');
    }

    const cvsuStacks = [
        { name: 'React.js' },
        { name: 'Node.js' },
        { name: 'MySQL' }
    ];

    const viewCvSU = () => {
        window.open('https://group4-enrollment-system-client.vercel.app/');
    }

    const viewFN = () => {
        window.open('https://youtu.be/DVoQg1aZIOI');
    }

    const lightShopStacks = [
        { name: 'Godot' },
        { name: 'GDScript' },
        { name: 'Krita' }
    ];

    const viewLightShop = () => {
        window.open(`https://drive.google.com/drive/folders/15OfzUcImzmupJyDYHcFnSR70JTBz8510?usp=drive_link`);
    }

    const codevStack = [
        { name: 'HTML/CSS' },
    ];

    const viewCodev = () => {
        window.open('https://gerlyntan07.github.io/codev/');
    }

    const darkmodeText = `${darkMode ? 'text-sectionClrLight' : 'text-black'} text-sm md:text-lg`;
    const darkmodeTextBrown = `${darkMode ? 'text-lightBrown' : 'text-darkBrown'}`;
    const linkIcons = `${darkMode ? 'text-lightBG' : 'text-sectionClrDark'} text-[2rem] lg:text-[2.5rem]`;
    const sectionContainers = `${darkMode ? 'bg-darkBackground' : 'bg-lightBG'}`;
    const section2Containers = `${darkMode ? 'bg-sectionClrDark' : 'bg-sectionClrLight'}`
    const artworkSection = `${darkMode ? 'bg-sectionClrDark' : 'bg-lightBG'}`

    const projTitle = `${darkMode ? 'text-lightBrown' : 'text-darkBrown'} font-poltawski italic uppercase text-lg xl:text-xl m-0`;
    const projCard = `${darkMode ? 'bg-sectionContainerDark border-[#404040]' : 'bg-white border-gray-300'} m-0 flex flex-col items-start justify-center p-3 border-3 cursor-pointer hover:scale-102 transition-all duration-300`;
    const projDesc = `${darkMode ? 'text-sectionClrLight' : 'text-black'} font-roboto text-sm xl:text-base`;    

    return (
        <div className={`${darkMode ? 'bg-darkBackground' : 'bg-lightBG'} m-0 p-0`}>
            <Helmet>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
                <title>Gerlyn Tan | Portfolio</title>
                <meta name="robots" content="index, follow" />
                <meta property="og:image" content="https://tan-web-portfolio.vercel.app/src/assets/portfolio-logo.png" />
                <meta property="og:url" content="https://tan-web-portfolio.vercel.app/" />
                <meta property="og:title" content="Gerlyn Tan | Front-End Developer" />
                <meta property="og:description" content="Portfolio of a skilled Front-End Developer and UI Designer with expertise in React.js." />
            </Helmet>

            <Header toggleDarkMode={toggleDarkMode} isDarkMode={darkMode} />

            {/* HERO */}
            <div id='hero' className={`${sectionContainers} flex flex-col h-screen items-center justify-center text-center`}>
                <div className='flex w-full flex-col h-screen items-center justify-center xl:flex-row-reverse xl:justify-between lg:w-[80%] 2xl:w-[70%]'>
                    <img src={HeroImg} alt="" className='w-[70%] lg:w-[60%] xl:w-[40%] object-contain mb-3' />

                    <div className='flex flex-col items-center justify-center w-[85%] xl:w-[50%] xl:items-start'>
                        <p className={`${darkmodeText} font-roboto text-sm lg:text-lg m-0`}>Say <span className='font-bold'>hello</span> to my <span className='font-bold'>world</span>! I am</p>
                        <p className={`${darkmodeTextBrown} text-[2rem] font-poltawski uppercase italic m-0 lg:text-[3rem]`}>Gerlyn Tan</p>
                        <p className={`${darkmodeText} font-roboto text-sm lg:text-lg m-0 xl:text-left`}>A passionate Computer Science student dedicated to building appealing, creative, and user-friendly projects. Let’s craft your ideas into reality!</p>

                        <div className='flex flex-col items-center justify-center mt-3 lg:flex-row lg:gap-5'>
                            <a href={cv} download='Gerlyn Tan CV' className={`bg-darkBrown font-roboto !no-underline py-2 px-4 rounded-full text-white hover:shadow-md outline-none`}>Download CV</a>

                            <div className='flex flex-row items-center justify-center gap-3 mt-2 lg:mt-0'>
                                <a href="https://github.com/gerlyntan07" target='_blank'><AiFillGithub className={`${linkIcons}`} /></a>
                                <a href="https://www.facebook.com/gerlyn.tan.50" target='_blank'><AiFillFacebook className={`${linkIcons}`} /></a>
                                <a href="https://www.instagram.com/mehehehe__/" target='_blank'><AiFillInstagram className={`${linkIcons}`} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ABOUT */}
            <div id='about' className='flex flex-col w-full items-center justify-center mt-5'>
                <div className={`${artworkSection} flex flex-col w-[90%] items-center justify-center p-4 md:w-[90%] xl:flex-row xl:w-[80%] 2xl:w-[70%] border-1 border-gray-400 shadow-md rounded-lg xl:justify-between xl:gap-10`}>
                    <div className='flex flex-col items-center justify-center w-[90%] text-center xl:w-[50%]'>
                        <p className={`${darkmodeText} font-roboto text-sm m-0 xl:text-left`}>Before becoming an aspiring developer, I once dreamt of becoming a great</p>
                        <p className={`${darkmodeTextBrown} font-poltawski italic text-[1.5rem] m-0 uppercase lg:text-[2rem] xl:text-[4rem] xl:pt-5 xl:text-left w-full`}>Artist</p>
                    </div>

                    <Artworks />
                </div>

                <p className={`${darkmodeText} w-[90%] lg:w-[70%] font-roboto text-center pt-40 pb-15`}>I now found new challenge in developing, creating, and building computer graphics, software, and applications. I am happy to use my years of experience in the arts in this field.</p>

                <div className={`${section2Containers} flex w-full items-center h-[35rem] justify-center md:h-[33rem] lg:h-[17rem]`}>
                    <div className={`${sectionContainers} flex flex-col ${darkMode ? 'border-3 border-[#373737]' : 'shadow-lg'} overflow-hidden rounded-2xl w-[90%] items-center justify-center py-10 lg:py-[3rem] xl:py-[4rem] md:w-[75%] lg:flex-row lg:w-[90%] xl:w-[70%] lg:justify-around`}>
                        <div className='flex flex-col items-center justify-center text-center w-[90%] md:w-[80%] lg:w-[40%]'>
                            <p className={`${darkmodeText} font-poltawski text-[1rem] xl:text-[1.3rem] italic uppercase`}>Full-Stack Development</p>
                            <p className={`${darkmodeText} font-roboto text-sm md:text-sm`}>I often get the role of both front-end and back-end developer in group projects. I enjoy coding things from scratch, building seamless user experiences, and crafting ideas to life.</p>

                            <p className={`${darkmodeTextBrown} font-poltawski italic text-[1rem]`}>Languages and Dev Tools</p>

                            <div className='w-full flex items-center justify-center gap-5 overflow-hidden'>
                                <Marquee direction='horizontal'>
                                    <div className='flex flex-row items-center justify-center w-full'>
                                        <img src={darkMode ? light_node : node} alt="" />
                                        <img src={htmlIcon} alt="" />
                                        <img src={cssIcon} alt="" />
                                        <img src={jsIcon} alt="" />
                                        <img src={reactIcon} alt="" />
                                        <img src={vsCodeIcon} alt="" />
                                        <img src={mysql} alt="" />
                                        <img src={php} alt="" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>

                        <div className={`${section2Containers} lg:absolute w-full h-2 lg:w-1 lg:h-[18rem] my-10 lg:my-0`}> </div>

                        <div className='flex flex-col items-center justify-center text-center w-[90%] md:w-[80%] lg:w-[40%]'>
                            <p className={`${darkmodeText} font-poltawski text-[1rem] xl:text-[1.3rem] italic uppercase lg:p-0`}>UI Design</p>
                            <p className={`${darkmodeText} font-roboto text-sm md:text-sm`}>Art is one thing I have been fond of doing since I was a kid. I love playing with colors and making simple yet appealing designs.</p>

                            <p className={`${darkmodeTextBrown} font-poltawski italic text-[1rem]`}>Design Tools</p>

                            <div className='w-full flex items-center justify-center gap-5 overflow-hidden'>
                                <Marquee direction='horizontal'>
                                    <div className='flex flex-row items-center justify-center w-full'>
                                        <img src={figmaIcon} alt="" />
                                        <img src={canvaIcon} alt="" />
                                        <img src={inkscapeIcon} alt="" />
                                        <img src={drawingIcon} alt="" />
                                        <img src={krita} alt="" />
                                        <img src={figmaIcon} alt="" />
                                        <img src={canvaIcon} alt="" />
                                        <img src={inkscapeIcon} alt="" />
                                        <img src={drawingIcon} alt="" />
                                        <img src={krita} alt="" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* PROJECTS */}
            <div id='projects' className={`${sectionContainers} flex flex-col items-center justify-center w-full mt-40`}>
                <p className={`${darkmodeText} font-poltawski uppercase italic text-xl lg:text-[1.7rem]`}>Recent Projects</p>
                <p className={`${darkmodeText} font-roboto w-[85%] lg:w-[75%] xl:w-[65%] text-center xl:text-[1rem]`}>These are the individual school projects I have worked on and the group school projects I took part in.</p>

                <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-[90%] 2xl:w-[75%] mt-7`}>
                    <ProjectCards title='Café de Júr: E-Commerce Platform' titleStyle={projTitle} projCardStyle={projCard} description='A simple e-commerce website for admin and customers with product management, order management, and online payment simulation.' projDescStyle={projDesc} stacks={cafeDeJur} projCover={cdjCover} viewProj={viewCadeDeJur} />
                    <ProjectCards title='Light Shop' titleStyle={projTitle} projCardStyle={projCard} description={`A 2D puzzle escape game inspired from a Korean series. Players must navigate through each level's unique obstacle pattern — from spiky metal traps and timed traps to deceptive paths and false lights.`} projDescStyle={projDesc} stacks={lightShopStacks} projCover={LightShop} viewProj={viewLightShop} />
                    <ProjectCards title='Mobile Portfolio' titleStyle={projTitle} projCardStyle={projCard} description='A visually engaging mobile portfolio that shares my journey as a creative developer — blending stories, inspirations, and future ambitions. Built to reflect not just my skills, but who I am and where I’m headed.' projDescStyle={projDesc} stacks={mobilePortfolioStacks} projCover={mpCover} viewProj={viewMobielPortfolio} />
                    <ProjectCards title='Enrollment System' titleStyle={projTitle} projCardStyle={projCard} description='A user-friendly design for CvSU - Department of Computer Studies, allowing students, officers, and administrators to handle enrollment with ease.' projDescStyle={projDesc} stacks={cvsuStacks} projCover={EnrollmentSystem} viewProj={viewCvSU} />
                    <ProjectCards title='Finding NeedMo' titleStyle={projTitle} projCardStyle={projCard} description='A seamless resource hub with role-specific access for managing and retrieving educational content designed for CvSU - Department of Computer Studies.' projDescStyle={projDesc} stacks={cvsuStacks} projCover={fnCover} viewProj={viewFN} />
                    <ProjectCards title='Codev IT Company' titleStyle={projTitle} projCardStyle={projCard} description='A professional website for a hypothetical IT company, focusing on modern UI/UX principles to showcase services and team expertise.' projDescStyle={projDesc} stacks={codevStack} projCover={Codev} viewProj={viewCodev} />
                </div>
            </div>

            {/* CONTACT */}
            <div id='contact' className={`${section2Containers} w-full h-[30rem] flex items-center justify-center mt-50 md:h-[33rem]`}>
                <div className={`${sectionContainers} flex flex-col ${darkMode ? 'border-3 border-[#373737]' : 'shadow-lg'} overflow-hidden rounded-2xl w-[95%] items-center justify-center py-10 md:w-[75%] xl:w-[50%] 2xl:w-[50%]`}>
                    <p className={`${darkmodeText} font-poltawski uppercase italic text-xl lg:text-[1.7rem]`}>Contact Me</p>
                    <p className={`${darkmodeText} font-roboto w-[90%] text-center mb-3 lg:w-[70%] xl:text-[1rem]`}>Thanks for taking the time to reach this part. How may I help you?</p>

                    <ContactForm toastTheme={darkMode ? `dark` : `light`} submitStyle={`bg-darkBrown py-2 px-5 text-lightBG rounded-full`} labelStyle={`${darkmodeText} font-roboto text-sm`} inputStyle={`${darkmodeText} font-roboto text-sm mb-4 outline-none py-2 px-3 w-full ${darkMode ? 'border-3 border-sectionClrDark focus:bg-sectionContainerDark': 'border-2 border-gray-200 focus:bg-white'} transition-colors duration-300 rounded-sm`} darkMode={darkMode} />
                </div>          
            </div>               

            {/* FOOTER */}
            <footer id='footer' className='w-full flex flex-col py-20 mt-20 items-center justify-center text-center'>
                <img src={GTLogo} alt="" className='w-[10rem]' />
                <p className={`${darkmodeText} font-roboto italic text-xl m-0 leading-none`}><span className={`${darkmodeTextBrown} font-bold text-[2rem]`}>G</span>rowing Talent,</p>
                <p className={`${darkmodeText} font-roboto italic text-xl m-0 leading-none`}><span className={`${darkmodeTextBrown} font-bold text-[2rem]`}>T</span>urning Ideas into Reality</p>

                <p className={`${darkMode ? 'text-gray-500' : 'text-gray-400'} font-roboto text-xs mt-2`}>Copyright &copy; 2025 Gerlyn Tan</p>
            </footer>                 
        </div>
    );
}

export default App;
