import React, { useEffect, useState } from 'react';

import  CustomButton  from '../custom-button/custom-button.component';
import Logo from '../logo/logo.component';

import './header.styles.scss';

import WebsiteNavigation from '../website-navigation/website-navigation.component';
import MobileNavigation from '../mobile-navigation/mobile-navigation.component';

const Header = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth
    });

    const mobileNavBreakpoint = 900;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize({
                width: window.innerWidth
            });
        }
        //watch for window resize and change windowSize accordingly
        window.addEventListener("resize", handleWindowResize);

        //cleanup
        return () => window.removeEventListener("resize", handleWindowResize);
    },[]);

    if(windowSize.width > mobileNavBreakpoint) {
        return (
            <header className="header">
                <Logo logoClass="header__logo"/>
                <WebsiteNavigation navClass="header__nav" />
                <CustomButton white link="contact/booking" buttonClass="header__button">booking</CustomButton>
            </header> 
        );
    } else {
        return (
            <header className="header">
                <MobileNavigation />
            </header> 
        );
    }
    
};

export default Header; 