import { Link } from 'react-scroll'

function PopupMenu(){
    const closeBtn = document.getElementById('closeBtn');
    const popupMenu = document.getElementById('popupMenu');

    function closePopupMenu(){
        popupMenu.style.marginLeft = '100%';
        popupMenu.style.transition = '1s ease';
    }

    return(
        <div className='popup-menu' id='popupMenu'>
            <div className='popup-top'>
            <img className='darkmode-popup' src="src/assets/icons8-dark-mode-50.png" alt="" />
                <button id='closeBtn' onClick={closePopupMenu}>x</button>
            </div>
                <div>
                    <ul>
                        <li><Link to='/' spy={true} smooth={true} duration={500} offset={100}>Home</Link></li>
                        <li><Link to='/' spy={true} smooth={true} duration={500} offset={100}>About</Link></li>
                        <li><Link to='/' spy={true} smooth={true} duration={500} offset={100}>Projects</Link></li>
                        <li><Link to='/' spy={true} smooth={true} duration={500} offset={100}>Contact</Link></li>
                    </ul>
                </div>
        </div>
    )
}

export default PopupMenu