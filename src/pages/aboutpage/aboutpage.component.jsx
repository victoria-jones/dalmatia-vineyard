import React from 'react';

import BackgroundImage from '../../components/background-image/background-image.component';
import StyledHeading from '../../components/styled-heading/styled-heading.component';
import PhotoGallery from '../../components/photo-gallery/photo-gallery.component'; 
import ParagraphHeading from '../../components/paragraph-heading/paragraph-heading.component';

import './aboutpage.styles.scss';

import backgroundImage from '../../assets/hero-background.jpg';

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

const AboutPage = () => {

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
        <div className='aboutpage main-content'>
            <BackgroundImage image={backgroundImage} />
            <StyledHeading 
                heading="About Dalmatia"
                styledHeadingClass="aboutpage__title"
            />

            <section className="aboutpage__the-vineyard">
                <div className="aboutpage__the-vineyard__sec aboutpage__the-vineyard__sec--1">
                    <div className="aboutpage__the-vineyard__sec--text">
                        <ParagraphHeading 
                            title="Lorem ipsum dolor sit amet,"
                        />
                        <p>
                        consectetur adipisicing elit. Aliquam corrupti, aliquid velit aspernatur expedita tempora recusandae a reiciendis ut repellendus fugit, doloribus exercitationem? Molestias eveniet vero eius eaque quasi laudantium.   
                        </p>
                    </div>
                    <div className="aboutpage__the-vineyard__sec--picture">
                        picture
                    </div>
                </div>

                <div className="aboutpage__the-vineyard__sec aboutpage__the-vineyard__sec--2">
                    <div className="aboutpage__the-vineyard__sec--picture">
                        picture  
                    </div>
                    <div className="aboutpage__the-vineyard__sec--text">
                        <ParagraphHeading 
                            title="Lorem ipsum,"
                        />
                        <p>
                            dolor sit amet consectetur adipisicing elit. Dicta aut perspiciatis sint eveniet quia sapiente illo quas ipsa quo. Nobis harum fuga sit molestiae id deserunt ex ducimus? Unde, ipsam!
                        </p>
                    </div>
                </div>

                <div className="aboutpage__the-vineyard__sec aboutpage__the-vineyard__sec--3">
                    <div className="aboutpage__the-vineyard__sec--text">
                        <ParagraphHeading 
                            title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        />
                        <p>
                            Exercitationem cumque ullam quas beatae! Odio, similique earum? Dolor quaerat quam iusto placeat quae nemo! Itaque, libero tempore eum reprehenderit autem sapiente?
                        </p>
                    </div>
                    <div className="aboutpage__the-vineyard__sec--picture">
                        picture     
                    </div>
                </div>
            </section>

            <section className="aboutpage__gallery section-padding">
                <div className="aboutpage__gallery--wrapper">
                    <div className="aboutpage__gallery__side aboutpage__gallery__side--1">
                        <div className="aboutpage__gallery--heading">
                            <StyledHeading
                                subheading="secluded"
                                heading="vineyard estate"
                                text="for a private event surrounded by nature"
                            />
                        </div>

                        <div className="aboutpage__gallery--text">
                            <div className="aboutpage__gallery--p">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium error ab sunt sapiente, deleniti recusandae modi similique cupiditate, veritatis ipsam, nesciunt nostrum perferendis! Ad fugit, aspernatur perferendis nisi doloremque velit.
                            </div>
                        </div>
                    </div>

                    <div className="aboutpage__gallery__side aboutpage__gallery__side--2">
                        <PhotoGallery images={images} />
                    </div>
                </div>
            </section>

            <section className="aboutpage__what-dalmatia-does">
                what dalmatia does area
            </section>
        </div>
    );
}

export default AboutPage;