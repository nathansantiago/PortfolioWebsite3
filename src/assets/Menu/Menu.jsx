import { useState } from 'react';
import './Menu.scss'
import { NavLink } from 'react-router-dom';
import { AboutMeIcon, ContactMeIcon, HomeIcon, MenuIcon, NIcon, PortfolioIcon, XIcon } from '../Icons';

export default function Header () {
    const [showMenu, setShowMenu] = useState(false); // Determines if menu should be shown

    return (
        <>
            {/* If not showing menu show button */}
            {!showMenu && (
                <button aria-label='Open Menu' onClick={() => setShowMenu(true)} className="menu-icon">
                    <NIcon/>
                    
                </button>
            )}
            {showMenu && (
                <>
                    <button onClick={() => setShowMenu(false)} className="menu-icon">
                        <NIcon/>
                    
                    </button>
                </>
            )}

            <nav className={`${showMenu ? 'menu-active' : 'menu-inactive'}`}>
                <div className='menu-icon-container'>
                    <NavLink to={'/'} onClick={() => setShowMenu(false)} className='nav-icon'>
                        <HomeIcon/>
                    </NavLink>
                    <NavLink to={'/portfolio'} onClick={() => setShowMenu(false)} className='nav-icon'>
                        <PortfolioIcon/>
                    </NavLink>
                    <NavLink to={'/about'} onClick={() => setShowMenu(false)} className='nav-icon'>
                        <AboutMeIcon/>
                    </NavLink>
                    <NavLink to={'/contact'} onClick={() => setShowMenu(false)} className='nav-icon'>
                        <ContactMeIcon/>
                    </NavLink>
                </div>
            </nav>
        </>
    );
}