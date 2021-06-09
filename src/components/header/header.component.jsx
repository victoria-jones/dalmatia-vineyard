import React from 'react';

import './header.styles.scss';

import WebsiteNavigation from '../website-navigation/website-navigation.component';

const Header = () => (
    <header className="header">
        <div className="header-logo">header logo placeholder</div>
        <WebsiteNavigation />
    </header>
);

export default Header;