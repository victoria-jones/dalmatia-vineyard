import React, { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import './website-navigation.styles.scss';

const WebsiteNavigation = () => {
    const location = useLocation();
    let currentPage = location.pathname;

    useEffect(() => {
        //update the currentPage
        currentPage = location.pathname;
    }, [location]);

    
    console.log(currentPage);

    return (
        <nav className="website-naviation">
            <ul className="website-navigation__list">
                <li className="website-navigation__list-item">
                    <Link className="website-navigation__link" to='/'>
                        home
                    </Link>
                </li>
                <li className="website-navigation__list-item">
                    <Link className="website-navigation__link" to='/about'>
                        about
                    </Link>
                </li>
                <li className="website-navigation__list-item">
                    <Link className="website-navigation__link" to='/events'>
                        events
                    </Link>
                </li>
                <li className="website-navigation__list-item">
                    <Link className="website-navigation__link" to='/wine_experience'>
                        wine experience
                    </Link>
                </li>
                <li className="website-navigation__list-item">
                    <Link className="website-navigation__link" to='/contact'>
                        contact
                    </Link>
                </li>
            </ul>
        </nav>
    ); 
};

export default WebsiteNavigation;