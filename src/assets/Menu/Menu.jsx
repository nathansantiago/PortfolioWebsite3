import { useEffect, useRef, useState } from 'react';
import './Menu.scss'
import { NavLink } from 'react-router-dom';
import { AboutMeIcon, ContactMeIcon, DevpostIcon, GithubIcon, HomeIcon, LinkedInIcon, MenuIcon, NIcon, PortfolioIcon, XIcon } from '../Icons';

export default function Header () {
    const [showMenu, setShowMenu] = useState(false); // Determines if menu should be shown
    const windowWidth = useRef(window.innerWidth);

    useEffect(() => {
        if (windowWidth.current > 1000) {
            setShowMenu(true);
        }
    }, []);

    function CloseMenu () {
        if (windowWidth.current < 1000) {
            setShowMenu(false);
        }
    }

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

            <div className={`${showMenu ? 'menu-active' : 'menu-inactive'} nav-container`}>
                <nav>
                    <div className='menu-icon-container'>
                        <NavLink to={'/'} onClick={CloseMenu} className='nav-icon'>
                            <HomeIcon/>
                        </NavLink>
                        <NavLink to={'/portfolio'} onClick={CloseMenu} className='nav-icon'>
                            <PortfolioIcon/>
                        </NavLink>
                        <NavLink to={'/about'} onClick={CloseMenu} className='nav-icon'>
                            <AboutMeIcon/>
                        </NavLink>
                        <NavLink to={'/contact'} onClick={CloseMenu} className='nav-icon'>
                            <ContactMeIcon/>
                        </NavLink>
                    </div>
                </nav>
                <ul className='social-links'>
                    <li className='social-link-icon-container'>
                        <a href="https://www.linkedin.com/in/nathan-santiago/" target="_blank" className='social-link-icon'>
                            <LinkedInIcon/>
                        </a>
                    </li>
                    <li className='social-link-icon-container'>
                        <a href="https://github.com/nathansantiago" target="_blank" className='social-link-icon'>
                            <GithubIcon/>
                        </a>
                    </li>
                    <li className='social-link-icon-container'>
                        <a href="https://devpost.com/santiagonathan9254?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" className='social-link-icon'>
                            <DevpostIcon/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}