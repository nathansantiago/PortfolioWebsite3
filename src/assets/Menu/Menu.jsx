import { useState } from 'react';
import './Menu.scss'
import { NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from '../Icons';

export default function Header () {
    const [showMenu, setShowMenu] = useState(false); // Determines if menu should be shown

    return (
        <>
            {/* If not showing menu show button */}
            {!showMenu && (
                <button aria-label='Open Menu' onClick={() => setShowMenu(true)} className="menu-icon">
                    <MenuIcon/>
                    Menu
                </button>
            )}
            {showMenu && (
                <>
                    <button onClick={() => setShowMenu(false)} className="menu-icon">
                    <XIcon/>
                    Close
                    </button>
                </>
            )}

            <nav className={`${showMenu ? 'menu-active' : 'menu-inactive'}`}>
                <NavLink to={'/'} onClick={() => setShowMenu(false)}>
                    Home
                </NavLink>
                <NavLink to={'/about'} onClick={() => setShowMenu(false)}>
                    About
                </NavLink>
                <NavLink to={'/portfolio'} onClick={() => setShowMenu(false)}>
                    Portfolio
                </NavLink>
            </nav>
        </>
    );
}