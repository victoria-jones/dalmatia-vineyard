import React, { useState, useEffect } from 'react';

import './model.styles.scss';

const Model = ({ backgroundImage, showModel, showModelChange }) => {

    //const [showModel, setShowModel] = useState(modelVisible);
    //const [selectedImage, setSelectedImage] = useState(backgroundImage);

    return (
        <div className={`model
            ${showModel ? '' : 'model--hidden'}
        `}>
            <div className={`model__popup
                    ${showModel ? '' : 'model__popup--hidden'}
                `}
                style={{
                    backgroundImage: `url(${backgroundImage})`
                }}
            >
                <div className="model--wrapper">
                    <div className="model__close"
                        onClick={() => {
                            //setShowModel(false);
                            showModelChange(false);
                            //setSelectedImage('');
                        }}
                    >&#10006;</div>
                </div>
            </div>
        </div>
    );
}

export default Model;