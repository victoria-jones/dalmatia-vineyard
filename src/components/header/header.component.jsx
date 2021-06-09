import React, { useEffect, useState } from 'react';
import  CustomButton  from '../custom-button/custom-button.component';

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
            <div className="header__logo">header logo placeholder</div>
            <WebsiteNavigation logoSize={logoSize} />
            <CustomButton white>booking</CustomButton>
        </header>
    );
};

export default Header;