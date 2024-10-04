import '/src/assets/portfolio-logo.png'
import '/src/assets/hero-pic.png'
import { Link } from 'react-scroll'

function App() {
    const popupMenu = document.getElementById('popupMenu');

    function openMenu(){
        popupMenu.style.marginLeft = '0%';
    }

    function closeMenu(){
        popupMenu.style.marginLeft = '100%';
    }

    return (
        <>
            {/* POPUP MENU */}
            <div className='popup-menu' id='popupMenu'>
                <div className="popup-container">
                    <div className='popup-top'>
                        <img className='darkmode-popup' src="src/assets/icons8-dark-mode-50.png" alt="" />
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
                    <img className='gt-logo' src="src/assets/portfolio-logo.png" alt="logo" />
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
                    <img className='darkmode-icon' src="src/assets/icons8-dark-mode-50.png" alt="dark mode" />
                    <button id='menuBtn'onClick={openMenu}><img className='menuBtn' src="src/assets/icons8-menu-50.png" alt="menu" /></button>
                </div>
            </header>

        </>



    )
}

export default App