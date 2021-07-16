import React from 'react';

import './photo-gallery.styles.scss';

//take object with thumbnail image and big image
    //make a module that will be used here for the big image

const PhotoGallery = () => (
    <div className="photo-gallery sub-section-padding">
        <div className="photo-gallery__grid">
            <div className="photo-gallery__grid__box"></div>
            <div className="photo-gallery__grid__box"></div>
            <div className="photo-gallery__grid__box"></div>
            <div className="photo-gallery__grid__box"></div>
            <div className="photo-gallery__grid__box"></div>
            <div className="photo-gallery__grid__box"></div>
            <div className="photo-gallery__grid__box"></div>
            <div className="photo-gallery__grid__box"></div>
        </div>
    </div>
);

export default PhotoGallery;