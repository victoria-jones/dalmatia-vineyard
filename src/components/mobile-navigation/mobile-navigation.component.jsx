import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../logo/logo.component';
import { Link, useLocation } from 'react-router-dom';

import './mobile-navigation.styles.scss';

const MobileNavigation = () => {
    const location = useLocation();

    const [locationMarker, setLocationMarker] = useState(0);
    const [currentLocation, setCurrentLocation ] = useState("/");

    //check react router for current location
    useEffect(() => {
        //set current page path
        setCurrentLocation(location.pathname);
    }, [location]);

    //make updates when the page location changes
    useEffect(() => {
        //close menu after a link is selected
        //closeMenu();
        //update the location marker's starting point
        changeMarkerLocation();
    }, [currentLocation]);

    const closeMenu = () => {
        const checkbox = document.getElementById("mobile-navigation__checkbox");
        checkbox.checked = false;
    };

    const changeMarkerLocation = () => {
        //const locationMarker = document.getElementsByClassName("mobile-navigation__nav-location-marker")[0];
        if(document.querySelector(`a[href="${currentLocation}"]`)) {
            //set location and link
            //const parentOffset = document.querySelector(`a[href="${currentLocation}"]`).parentNode.parentNode.parentNode.offsetTop;
            const linkOffset = document.querySelector(`a[href="${currentLocation}"]`).offsetTop;
            const parentOffset = document.querySelector(`a[href="${currentLocation}"]`).parentNode.parentNode.parentNode.offsetTop;
            
            //remove the extra space from the parent element to get the correct offset
            //leftOffset -= parentOffset; 
            const markerOffset = linkOffset;

            //set location of diamond
            //setLocationMarker(parentOffset);
            console.log(markerOffset);
            setLocationMarker(markerOffset);
        }
    };
    
    return (
        <div className="mobile-navigation">
            <input type="checkbox" className="mobile-navigation__checkbox" id="mobile-navigation__checkbox" />
            <Link to="/" className="mobile-navigation__logo-link"
                onClick={() => closeMenu()}
            >
                <Logo logoClass="mobile-navigation__logo" />
            </Link>

            <label htmlFor="mobile-navigation__checkbox" className="mobile-navigation__label">
                <div className="mobile-navigation__icon mobile-navigation__icon-border">
                    <div className="mobile-navigation__icon-background">
                        <div className="mobile-navigation__hamburger-bar"></div>
                    </div>
                </div>
            </label> 

            <div className="mobile-navigation__nav-background">
                <div className="mobile-navigation__nav--wrapper">
                    <div className="mobile-navigation__nav-location-marker">
                        &#9670;
                    </div>
                    <nav className="mobile-navigation__nav">
                        <ul className="mobile-navigation__list nav-list">
                            <li className="mobile-navigation__item">
                                <Link to="/" className="mobile-navigation__link nav-link"
                                        onClick={() => closeMenu()}
                                >
                                    home
                                </Link>
                            </li>
                            <li className="mobile-navigation__item">
                                <Link to="/about" className="mobile-navigation__link nav-link"
                                    onClick={() => closeMenu()}
                                >
                                    about
                                </Link>
                            </li>
                            <li className="mobile-navigation__item">
                                <Link to="/events" className="mobile-navigation__link nav-link"
                                    onClick={() => closeMenu()}
                                >
                                    events
                                </Link>
                            </li>
                            <li className="mobile-navigation__item">
                                <Link to="/wine_experience" className="mobile-navigation__link nav-link"
                                    onClick={() => closeMenu()}
                                >
                                    wine experience
                                </Link>
                            </li>
                            <li className="mobile-navigation__item">
                                <Link to="/contact" className="mobile-navigation__link nav-link"
                                    onClick={() => closeMenu()}
                                >
                                    contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <CustomButton white link="contact/booking" buttonClass="header__button">booking</CustomButton>
                </div>
            </div>
        </div>
    );
}

export default MobileNavigation;