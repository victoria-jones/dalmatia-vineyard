import React, { useState } from 'react';

import Model from '../model/model.component';

import './photo-gallery.styles.scss';

const PhotoGallery = ({ images }) => {

    const [modelImage, setModelImage] = useState();
    const [showModel, setShowModel] = useState(false);

    const showModelChange = (newValue) => {
        setShowModel(newValue);
    }

   return (
        <div className="photo-gallery sub-section-padding">
            <Model backgroundImage={modelImage} showModel={showModel} showModelChange={showModelChange} />
            <div className="photo-gallery__grid">
                {images.thumbnails.map(image => 
                    <div 
                        className={`photo-gallery__grid__box photo-gallery__grid__box--${images.thumbnails.indexOf(image)}`}
                        key={images.thumbnails.indexOf(image)}
                        onClick={() => {
                            setModelImage(images.largeimages[images.thumbnails.indexOf(image)]);
                            setShowModel(true);
                        }}
                    >
                        <div className="photo-gallery__grid__box__image"
                            style={{
                                backgroundImage: `url(${image})`
                            }}
                        >
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default PhotoGallery;