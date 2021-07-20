import React from 'react';

import './model.styles.scss';

const Model = ({ backgroundImage, showModel, showModelChange }) => {

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
                            showModelChange(false);
                        }}
                    >&#10006;</div>
                </div>
            </div>
        </div>
    );
}

export default Model;