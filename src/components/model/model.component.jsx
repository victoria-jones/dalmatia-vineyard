import React, { useState, useEffect } from 'react';

import './model.styles.scss';

const Model = ({ backgroundImage, modelVisible }) => {

    const [showModel, setShowModel] = useState(modelVisible);
    const [selectedImage, setSelectedImage] = useState(backgroundImage);

    useEffect(()=> {
        console.log(`showModel has changed in the model component: ${showModel}`);
    }, [showModel]);

    return (
        <div className={`model
            ${showModel ? '' : 'model--hidden'}
        `}>
            <div className={`model__popup
                    ${showModel ? '' : 'model__popup--hidden'}
                `}
                style={{
                    backgroundImage: `url(${selectedImage})`
                }}
            >
                <div className="model--wrapper">
                    <div className="model__close"
                        onClick={() => {
                            setShowModel(false);
                            setSelectedImage('');
                        }}
                    >&#10006;</div>
                </div>
            </div>
        </div>
    );
}

export default Model;