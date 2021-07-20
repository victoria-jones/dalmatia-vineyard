import React, { useEffect, useState } from 'react';

import Model from '../model/model.component';

import './photo-gallery.styles.scss';

//take object with thumbnail image and big image
    //make a module that will be used here for the big image

const PhotoGallery = ({ images }) => {

    const [modelImage, setModelImage] = useState();
    const [showModel, setShowModel] = useState(true);

    useEffect(() => {
        console.log(`image: ${modelImage}`);
        console.log(`show popup: ${showModel}`);
    }, [modelImage]);

   return (
        <div className="photo-gallery sub-section-padding">
            <Model modelVisible={showModel} />
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