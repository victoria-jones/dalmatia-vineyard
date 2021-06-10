import React from 'react';
import { Link } from 'react-router-dom';

import './custom-button.styles.scss';

const CustomButton = ({ children, white, red }) => (
    <Link to="/contact">
        <div className={`${white ? 'custom-button--wrapper--white' : ''} ${red ? 'custom-button--wrapper--red' : ''} custom-button--wrapper`}>
            <div className={`${white ? 'custom-button--white' : ''} ${red ? 'custom-button--red' : ''} custom-button`}>
                {children}
            </div>
        </div>
    </Link>
);

export default CustomButton;