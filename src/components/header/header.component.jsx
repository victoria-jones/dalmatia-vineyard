import React, { useEffect, useState } from 'react';

import './header.styles.scss';

import WebsiteNavigation from '../website-navigation/website-navigation.component';

const Header = () => {
    const [logoSize, setLogoSize] = useState();

    useEffect(() => {
        const logoWidth = document.querySelector(".header-logo").offsetWidth;
        setLogoSize(logoWidth);
    },[]);

    console.log(logoSize);

    return(
        <header className="header">
            <div className="header-logo">header logo placeholder</div>
            <WebsiteNavigation logoSize={logoSize} />
        </header>
    );
};

export default Header;