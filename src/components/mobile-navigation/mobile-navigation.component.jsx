import React, { useState } from 'react';

import Logo from '../logo/logo.component';

import './mobile-navigation.styles.scss';

const MobileNavigation = () => {
    const [openMenu, setOpenMenu] = useState(false);
    
    return (
        <div className="mobile-navigation">
            <input type="checkbox" class="mobile-navigation__checkbox" id="mobile-navigation__checkbox" />
            <Logo logoClass="mobile-navigation__logo" />

            <label for="mobile-navigation__checkbox" class="mobile-navigation__label">
                <div className="mobile-navigation__icon mobile-navigation__icon-border">
                    <div className="mobile-navigation__icon-background">
                        <div className="mobile-navigation__hamburger-bar"></div>
                    </div>
                </div>
            </label>
        </div>
    );
}

export default MobileNavigation;