import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../logo/logo.component';
import CustomButton from '../custom-button/custom-button.component';

import './mobile-navigation.styles.scss';

const MobileNavigation = () => {
    const location = useLocation();

    const [locationMarker, setLocationMarker] = useState(0);
    const [currentLocation, setCurrentLocation ] = useState("/");

    //check react router for current location
    useEffect(() => {
        //set current page path
        setCurrentLocation(location.pathname);
        console.log(currentLocation);
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

    /*const changeMarkerLocation = () => {
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
    };*/

    const changeMarkerLocation = () => {
        const locationMarker = document.getElementsByClassName("mobile-navigation__nav-location__marker")[0];

        //lets be lazy here and just use a switch to add 20px + to get to link location
        switch(currentLocation) {
            case "/" : 
                console.log("homepage");
                locationMarker.style.marginTop = "0px";
                break;
            case "/about" :
                console.log("aboutpage");
                locationMarker.style.marginTop = "55px";
                break;
            case "/events" :
                console.log("eventspage");
                locationMarker.style.marginTop = "108px";
                break;
            case "/wine_experience" :
                console.log("wine experience page");
                locationMarker.style.marginTop = "161px";
                break;
            case "/contact" :
                console.log("contac page");
                locationMarker.style.marginTop = "214px";
                break;
            case "/contact/booking" :
                console.log("booking page");
                locationMarker.style.marginTop = "275px";
                break;
            default:
                console.log("default 'set to home'")
        }
    }
    
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
                    <div className="mobile-navigation__nav-location">
                        <div className="mobile-navigation__nav-location__marker">
                            &#9670;
                        </div>
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
                            <li className="mobile-navigation__item" onClick={() => closeMenu()}>
                                <CustomButton white link="contact/booking" buttonClass="header__button">
                                    booking
                                </CustomButton>
                            </li>
                        </ul>
                    </nav> 
                </div>

            </div>
            
        </div>
    );
}

export default MobileNavigation;