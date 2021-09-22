import React from 'react';

import './image-box-bordered.styles.scss';

const ImageBoxBordered = ({ children, backgroundImage, imageBoxClass, transparent, redBorder }) => (
    <div className={`imageBox  
                    ${imageBoxClass ? imageBoxClass : ''}
                    ${transparent ? 'imageBox--transparent' : ''}
    `}>
        <div className="imageBox__content">
           {children} 
        </div>
        <div className={`imageBox__border
            ${redBorder ? 'imageBox__border--red' : ''}
        `}></div>
        <div className="imageBox__image-holder"
                style={{
                    backgroundImage: `url(${backgroundImage})`
                }}
        >
        </div>
    </div>
);

export default ImageBoxBordered;