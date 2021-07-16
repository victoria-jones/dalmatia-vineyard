import React from 'react';

import StyledHeading from '../styled-heading/styled-heading.component';
import PhotoGallery from '../photo-gallery/photo-gallery.component';

import './gallery.styles.scss';

const Gallery = () => (
    <section className="gallery section-padding">
        <div className="gallery__heading">
            <StyledHeading 
                subheading="vineyard estate"
                heading="gallery"
                styledHeadingClass="gallery__heading--styledheading"
            />
        </div>

        <div className="gallery__photo-gallery">
            <PhotoGallery />
        </div>
    </section>
);

export default Gallery;