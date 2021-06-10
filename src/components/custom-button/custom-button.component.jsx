import React from 'react';
import { Link } from 'react-router-dom';

import './custom-button.styles.scss';

const CustomButton = ({ children, white, red, link, buttonClass }) => (
    <Link to={`/${link}`}>
        <div className={`${white ? 'custom-button--wrapper--white' : ''} 
                        ${red ? 'custom-button--wrapper--red' : ''} 
                        ${buttonClass ? buttonClass : ''} 
                        custom-button--wrapper`}
        >
            <div className={`${white ? 'custom-button--white' : ''} ${red ? 'custom-button--red' : ''} custom-button`}>
                {children}
            </div>
        </div>
    </Link>
);

export default CustomButton;