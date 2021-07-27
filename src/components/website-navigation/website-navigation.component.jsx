import React, { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import './website-navigation.styles.scss';

const WebsiteNavigation = ({ logoSize, navClass }) => {
    const location = useLocation();

    const [currentLocation, setCurrentLocation ] = useState("/");
    const [linkUnderlineOffset, setLinkUnderlineOffset] = useState(0);
    const [linkUnderlineWidth, setLinkUnderlineWidth] = useState(0);
    const [diamondLocation, setDiamondLocation] = useState(0);
    const [diamondWidth, setDiamondWidth] = useState(0);

    //check react router for current location
    useEffect(() => {
        //set current page path
        setCurrentLocation(location.pathname);
    }, [location]);

    //update link underline and diamond after currentLocation is set
    useEffect(() => {
        //do not run this if there is no link connected to the currentLocation
        if(document.querySelector(`a[href="${currentLocation}"]`)) {
            //set location and size of link underline
            const linkWidth = document.querySelector(`a[href="${currentLocation}"]`).parentNode.offsetWidth;
            let leftOffset = document.querySelector(`a[href="${currentLocation}"]`).parentNode.offsetLeft;
            const parentOffset = document.querySelector(`a[href="${currentLocation}"]`).parentNode.parentNode.parentNode.offsetLeft;
            
            //remove the extra space from the parent element to get the correct offset
            leftOffset -= parentOffset; 

            setLinkUnderlineOffset(leftOffset);
            setLinkUnderlineWidth(linkWidth);

            //set starting location of diamond
            setDiamondLocation(leftOffset);
            setDiamondWidth(linkWidth);
        }
        
    }, [currentLocation, logoSize]);

    const moveDiamond = (target) => {
        let mouseLocation = target.parentNode.offsetLeft;
        const locationElementWidth = target.parentNode.offsetWidth;
        const parentOffset = target.parentNode.parentNode.parentNode.offsetLeft;
        mouseLocation -= parentOffset;
        setDiamondLocation(mouseLocation);
        setDiamondWidth(locationElementWidth);
    };


    return (
        <nav className={`website-navigation ${navClass ? navClass : ''}`}>
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