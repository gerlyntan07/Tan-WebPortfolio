import React, { useRef } from 'react';
import Logo from '/src/assets/portfolio-logo.png';
import DarkMode from '/src/assets/icons8-dark-mode-50.png';
import { Link } from 'react-scroll';

function App() {
    // Using useRef to access the DOM element
    const popupMenuRef = useRef(null);

    function openMenu() {
        if (popupMenuRef.current) {
            popupMenuRef.current.style.marginLeft = '0%';
        }
    }

    function closeMenu() {
        if (popupMenuRef.current) {
            popupMenuRef.current.style.marginLeft = '100%';
        }
    }

    return (
        <>
            {/* POPUP MENU */}
            <div className='popup-menu' id='popupMenu' ref={popupMenuRef}>
                <div className="popup-container">
                    <div className='popup-top'>
                        <img className='darkmode-popup' src={DarkMode} alt="" />
                        <button className='closeBtn' onClick={closeMenu}>x</button>
                    </div>

                    <div className='popup-navBtn'>
                        <ul>
                            <li><Link to='/' spy={true} smooth={true} duration={500} offset={100}>Home</Link></li>
                            <li><Link to='/' spy={true} smooth={true} duration={500} offset={100}>About</Link></li>
                            <li><Link to='/' spy={true} smooth={true} duration={500} offset={100}>Projects</Link></li>
                            <li><Link to='/' spy={true} smooth={true} duration={500} offset={100}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <header>
                <div>
                    <img className='gt-logo' src={Logo} alt="logo" />
                </div>

                <div className='nav-btn'>
                    <ul>
                        <li><Link to='/' spy={true} smooth={true} duration={500} offset={100}>Home</Link></li>
                        <li><Link to='/' spy={true} smooth={true} duration={500} offset={100}>About</Link></li>
                        <li><Link to='/' spy={true} smooth={true} duration={500} offset={100}>Projects</Link></li>
                        <li><Link to='/' spy={true} smooth={true} duration={500} offset={100}>Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <img className='darkmode-icon' src={DarkMode} alt="dark mode" />
                    <button id='menuBtn' onClick={openMenu}>
                        <img className='menuBtn' src="src/assets/icons8-menu-50.png" alt="menu" />
                    </button>
                </div>
            </header>
        </>
    );
}

export default App;
