import React from 'react';

import './logo.styles.scss';

const Logo = ({ logoClass }) => (
    <div className={`logo ${logoClass ? logoClass : ''}`}>
        logo placeholder
    </div>
);

export default Logo;