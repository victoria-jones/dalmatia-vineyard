import React, { useState } from 'react';

import Logo from '../logo/logo.component';

import { Link, useLocation } from 'react-router-dom';

import './mobile-navigation.styles.scss';

const MobileNavigation = () => {
    const [openMenu, setOpenMenu] = useState(false);
    
    return (
        <div className="mobile-navigation">
            <input type="checkbox" class="mobile-navigation__checkbox" id="mobile-navigation__checkbox" />
            <Link to="/" className="mobile-navigation__logo-link">
                <Logo logoClass="mobile-navigation__logo" />
            </Link>

            <label for="mobile-navigation__checkbox" class="mobile-navigation__label">
                <div className="mobile-navigation__icon mobile-navigation__icon-border">
                    <div className="mobile-navigation__icon-background">
                        <div className="mobile-navigation__hamburger-bar"></div>
                    </div>
                </div>
            </label> 

            <div className="mobile-navigation__nav-background">
                <div className="mobile-navigation__nav--wrapper">
                    <div className="mobile-navigation__nav-location-marker">&#9670;</div>
                    <nav className="mobile-navigation__nav">
                        <ul className="mobile-navigation__list nav-list">
                            <li className="mobile-navigation__item">
                                <Link to="/" className="mobile-navigation__link nav-link">home</Link>
                            </li>
                            <li className="mobile-navigation__item">
                                <Link to="/about" className="mobile-navigation__link nav-link">about</Link>
                            </li>
                            <li className="mobile-navigation__item">
                                <Link to="/events" className="mobile-navigation__link nav-link">events</Link>
                            </li>
                            <li className="mobile-navigation__item">
                                <Link to="/wine_experience" className="mobile-navigation__link nav-link">wine experience</Link>
                            </li>
                            <li className="mobile-navigation__item">
                                <Link to="/contact" className="mobile-navigation__link nav-link">contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default MobileNavigation;