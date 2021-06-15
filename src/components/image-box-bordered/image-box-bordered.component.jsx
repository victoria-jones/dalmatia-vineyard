import React from 'react';

import './image-box-bordered.styles.scss';

const ImageBoxBordered = ({ children, backgroundImage }) => (
    <div className="imageBox">
        <div className="imageBox__content">
           {children} 
        </div>
        <div className="imageBox__border"></div>
        <div className="imageBox__image-holder"
                style={{
                    backgroundImage: `url(${backgroundImage})`
                }}
        >
        </div>
    </div>
);

export default ImageBoxBordered;