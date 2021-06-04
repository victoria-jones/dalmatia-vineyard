import React from 'react';
import './header.styles.scss';

import WebsiteNavigation from '../website-navigation/website-navigation.component';

const Header = () => (
    <header className="header">
        <h1>Dalmatia Vineyard Estate</h1>
        <WebsiteNavigation />
    </header>
);

export default Header;