import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, white, red }) => (
    <div className={`${white ? 'custom-button__white' : ''}
        ${red ? 'custom-button__red' : ''}
        custom-button`}>
        {children}
    </div>
);

export default CustomButton;