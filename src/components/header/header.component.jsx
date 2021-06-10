import React, { useEffect, useState } from 'react';

import  CustomButton  from '../custom-button/custom-button.component';
import Logo from '../logo/logo.component';

import './header.styles.scss';

import WebsiteNavigation from '../website-navigation/website-navigation.component';

const Header = () => {
    const [logoSize, setLogoSize] = useState();

    useEffect(() => {
        const logoWidth = document.querySelector(".header__logo").offsetWidth;
        setLogoSize(logoWidth);
    },[]);

    return(
        <header className="header">
            <Logo logoClass="header__logo"/>
            <WebsiteNavigation logoSize={logoSize} navClass="header__nav" />
            <CustomButton white link="contact" buttonClass="header__button">booking</CustomButton>
        </header>
    );
};

export default Header;