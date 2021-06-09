import React, { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import './website-navigation.styles.scss';

const WebsiteNavigation = () => {
    const location = useLocation();
    const [currentLocation, setCurrentLocation ] = useState("/");
    const [linkUnderlineOffset, setLinkUnderlineOffset] = useState();
    const [linkUnderlineWidth, setLinkUnderlineWidth] = useState();
    const [diamondLocation, setDiamondLocation] = useState();
    const [diamondWidth, setDiamondWidth] = useState();

    //check for react router for current location
    useEffect(() => {
        //set current page path
        setCurrentLocation(location.pathname);
    }, [location]);

    //update link underline and diamond after currentLocation is set
    useEffect(() => {
        //set location and size of link underline
        const linkWidth = document.querySelector(`a[href="${currentLocation}"]`).parentNode.offsetWidth;
        const leftOffset = document.querySelector(`a[href="${currentLocation}"]`).parentNode.offsetLeft;
        setLinkUnderlineOffset(leftOffset);
        setLinkUnderlineWidth(linkWidth);

        //set starting location of diamond
        setDiamondLocation(leftOffset);
        setDiamondWidth(linkWidth);
    }, [currentLocation]);

    /*console.log(`current location: ${currentLocation}`);
    console.log(`link underline offset: ${linkUnderlineOffset}`);
    console.log(`link width: ${linkUnderlineWidth}`);*/

    const moveDiamond = (target) => {
        const mouseLocation = target.parentNode.offsetLeft;
        const locationElementWidth = target.parentNode.offsetWidth;
        setDiamondLocation(mouseLocation);
        setDiamondWidth(locationElementWidth);
    };


    return (
        <nav className="website-naviation">
            <ul className="website-navigation__list">
                <li className="website-navigation__list-item" 
                    onMouseOver={(e) => moveDiamond(e.target)} 
                    onMouseOut={() => {
                            setDiamondLocation(linkUnderlineOffset); 
                            setDiamondWidth(linkUnderlineWidth);
                        }
                    }
                >
                    <Link className="website-navigation__link" to='/'>
                        home
                    </Link>
                </li>
                <li className="website-navigation__list-item"
                   onMouseOver={(e) => moveDiamond(e.target)} 
                   onMouseOut={() => {
                           setDiamondLocation(linkUnderlineOffset); 
                           setDiamondWidth(linkUnderlineWidth);
                       }
                   } 
                >
                    <Link className="website-navigation__link" to='/about'>
                        about
                    </Link>
                </li>
                <li className="website-navigation__list-item"
                    onMouseOver={(e) => moveDiamond(e.target)} 
                    onMouseOut={() => {
                            setDiamondLocation(linkUnderlineOffset); 
                            setDiamondWidth(linkUnderlineWidth);
                        }
                    } 
                >
                    <Link className="website-navigation__link" to='/events'>
                        events
                    </Link>
                </li>
                <li className="website-navigation__list-item"
                    onMouseOver={(e) => moveDiamond(e.target)} 
                    onMouseOut={() => {
                            setDiamondLocation(linkUnderlineOffset); 
                            setDiamondWidth(linkUnderlineWidth);
                        }
                    } 
                >
                    <Link className="website-navigation__link" to='/wine_experience'>
                        wine experience
                    </Link>
                </li>
                <li className="website-navigation__list-item"
                    onMouseOver={(e) => moveDiamond(e.target)} 
                    onMouseOut={() => {
                            setDiamondLocation(linkUnderlineOffset); 
                            setDiamondWidth(linkUnderlineWidth);
                        }
                    } 
                >
                    <Link className="website-navigation__link" to='/contact'>
                        contact
                    </Link>
                </li>
            </ul>
            <div className="website-navigation__underline" style={{ left: linkUnderlineOffset, width: linkUnderlineWidth }}>&nbsp;</div>
            <div className="website-navigation__diamond" style={{ left: diamondLocation, width: diamondWidth }}>&#9670;</div>
        </nav>
    ); 
};

export default WebsiteNavigation;