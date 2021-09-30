import React from 'react';

import './logo.styles.scss';

import dalmatiaSeal from '../../assets/logo/dalmatia-seal_100px.png';

const Logo = ({ logoClass }) => (
    <div className={`logo ${logoClass ? logoClass : ''}`}>
        <img src={dalmatiaSeal} alt="dalmatia seal" className="logo__image" />
    </div>
);

export default Logo;