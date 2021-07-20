import React from 'react';

import './background-image.styles.scss';

const BackgroundImage = ({ image }) => (
    <div className="background-image"
        style={{
            backgroundImage: `url(${image})`
        }}
    >
    </div>
);

export default BackgroundImage;