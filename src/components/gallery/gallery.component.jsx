import React from 'react';

import StyledHeading from '../styled-heading/styled-heading.component';
import PhotoGallery from '../photo-gallery/photo-gallery.component'; 

import './gallery.styles.scss';

import diningarea_thumbnail from '../../assets/thumbnails/dining-area_thumbnail.jpg';
import party_thumbnail from '../../assets/thumbnails/party_thumbnail.jpg';
import tabledecorations_thumbnail from '../../assets/thumbnails/table-decorations_thumbnail.jpg';
import vineyard_thumbnail from '../../assets/thumbnails/vineyard_thumbnail.jpg';
import vineyard_02_thumbnail from '../../assets/thumbnails/vineyard_02_thumbnail.jpg';
import vineyard_03_thumbnail from '../../assets/thumbnails/vineyard_03_thumbnail.jpg';
import winebarrels_thumbnail from '../../assets/thumbnails/wine-barrels_thumbnail.jpg';
import wineglass_thumbnail from '../../assets/thumbnails/wine-glass_thumbnail.jpg';

import diningarea from '../../assets/dining-area.jpg';
import party from '../../assets/party.jpg';
import tabledecorations from '../../assets/table-decorations.jpg';
import vineyard from '../../assets/vineyard.jpg';
import vineyard_02 from '../../assets/vineyard_02.jpg';
import vineyard_03 from '../../assets/vineyard_03.jpg';
import winebarrels from '../../assets/wine-barrels.jpg';
import wineglass from '../../assets/wine-glass.jpg';


const Gallery = () => {

    const images = {
        "thumbnails": [
            diningarea_thumbnail,
            party_thumbnail,
            tabledecorations_thumbnail,
            vineyard_thumbnail,
            vineyard_02_thumbnail,
            vineyard_03_thumbnail,
            winebarrels_thumbnail,
            wineglass_thumbnail
        ],
        "largeimages": [
            diningarea,
            party,
            tabledecorations,
            vineyard,
            vineyard_02,
            vineyard_03,
            winebarrels,
            wineglass
        ]
    };

    return (
        <section className="gallery section-padding">
            <div className="gallery__heading">
                <StyledHeading 
                    subheading="vineyard estate"
                    heading="gallery"
                    styledHeadingClass="gallery__heading--styledheading"
                />
            </div>

            <div className="gallery__photo-gallery">
                <PhotoGallery images={images} />
            </div>
        </section>
    );
}
export default Gallery;