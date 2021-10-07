import React from 'react';

import floralPattern from '../../assets/leaf-design.png';

import './floral-design.styles.scss';

const FloralDesign = ({ vertical, position }) => (
    <div className={`floral-design
        ${
            vertical ?
            `vertical-design`
            :
            `horizontal-design`
        }

        ${
            position ?
            `floral-design--${position}`
            :
            ''
        }
    `}
            style={{
                backgroundImage: `url(${floralPattern})`
            }}
    >
    </div>
);

export default FloralDesign;