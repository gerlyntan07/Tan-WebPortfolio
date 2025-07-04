import React, { useEffect, useState } from 'react'
import Logo from '/src/assets/portfolio-logo.png';
import { Link } from 'react-scroll';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";

function Header({ toggleDarkMode, isDarkMode }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    }

    const mobileLinkStyles = `${isDarkMode ? 'text-white bg-sectionClrDark' : 'text-black'} py-[0.8rem] rounded text-center font-roboto text-md cursor-pointer !no-underline`;
    const desktopLinkStyles = `${isDarkMode ? 'text-white' : 'text-black'} font-roboto text-lg cursor-pointer !no-underline`;

    return (
        <>
            {isMobile ? (
                <>
                    <div className={`${isDarkMode ? 'bg-sectionContainerDark border-b-2 border-gray-700' : 'bg-lightBG'} z-100 fixed w-full flex items-center justify-center py-2 shadow-md transition-colors duration-300`}>
                        <div className='flex justify-between w-[90%] items-center'>
                            <img src={Logo} alt="" className="w-[2rem] object-contain" />
                            <RiMenu3Fill className={`${isDarkMode ? 'text-white' : 'text-black'} text-[1.5rem]`} onClick={toggleMenu} />
                        </div>
                    </div>

                    {/* MOBILE MENU */}
                    <div className={`${isDarkMode ? 'bg-sectionContainerDark' : 'bg-popupMenu'} fixed top-0 right-0 h-full w-full shadow-lg z-[10000] transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col items-center pt-6`}>
                        <div className='flex justify-between w-full px-4 mt-4 mb-10'>
                            {isDarkMode ? (
                                <MdLightMode className='text-[1.5rem] text-white transition-colors duration-300' onClick={toggleDarkMode} />                                
                            ) : (
                                <MdDarkMode className='text-[1.5rem] transition-colors duration-300' onClick={toggleDarkMode} />
                            )}
                            <MdClose className={`${isDarkMode ? 'text-sectionClrLight' : 'text-black'} transition-colors duration-300 text-[1.5rem]`} onClick={toggleMenu} />
                        </div>

                        <div className='flex flex-col gap-4 item-center justify-center w-[80%]'>
                            <Link className={mobileLinkStyles} onClick={() => setMenuOpen(false)} offset={-100} duration={100} to='hero'>Home</Link>
                            <Link className={mobileLinkStyles} onClick={() => setMenuOpen(false)} offset={-100} duration={100} to='about'>About</Link>
                            <Link className={mobileLinkStyles} onClick={() => setMenuOpen(false)} offset={-100} duration={100} to='projects'>Projects</Link>
                            <Link className={mobileLinkStyles} onClick={() => setMenuOpen(false)} offset={-100} duration={100} to='contact'>Contact</Link>
                        </div>
                    </div>
                </>
            ) : (
                <div className={`${isDarkMode ? 'bg-sectionContainerDark border-b-2 border-gray-700' : 'bg-lightBG'} z-100 fixed w-full flex items-center justify-around py-3 shadow-md transition-colors duration-300`}>
                    <img src={Logo} alt="" className="w-[3rem] object-contain" />

                    <div className='flex items-center justify-center gap-[4rem]'>
                        <Link className={desktopLinkStyles} offset={-100} to='hero' duration={100}>Home</Link>
                        <Link className={desktopLinkStyles} offset={-100} to='about' duration={100}>About</Link>
                        <Link className={desktopLinkStyles} offset={-100} to='projects' duration={100}>Projects</Link>
                        <Link className={desktopLinkStyles} offset={-100} to='contact' duration={100}>Contact</Link>
                    </div>

                    {isDarkMode ? (                        
                        <MdLightMode className='text-[1.5rem] text-white transition-colors duration-300 cursor-pointer' onClick={toggleDarkMode} />
                    ) : (
                        <MdDarkMode className='text-[1.5rem] transition-colors duration-300 cursor-pointer' onClick={toggleDarkMode} />                        
                    )}
                </div>
            )}
        </>
    )
}

export default Header