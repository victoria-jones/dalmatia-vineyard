import React from 'react';

import StyledHeading from '../../components/styled-heading/styled-heading.component';
import BackgroundImage from '../../components/background-image/background-image.component';
import ParagraphHeading from '../../components/paragraph-heading/paragraph-heading.component';
import CustomList from '../../components/custom-list/custom-list.component';
import LionBackground from '../../components/lion-background/lion-background.component';

import './wine-experiencepage.styles.scss';

import backgroundImage from '../../assets/hero-background.jpg';

const WineExperiencePage = () => (
    <div className='wine-experiencepage main-content'>
        <BackgroundImage image={backgroundImage} />
        <StyledHeading 
            heading="Wine Experience"
            styledHeadingClass="wine-experiencepage__title page-title"
        />

        <section className="wine-experiencepage__about wine-experiencepage__section wrapper-width">
            <div className="wine-experiencepage__about--side wine-experiencepage__about--text">
                <ParagraphHeading 
                    title="About the Wine Experience"
                /> 
                <p>
                    Dalmatia Vineyard offers a customized first-hand wine experience for your special event.
                </p>
                <p>
                    Our Wine Experience includes:
                </p>
                <CustomList 
                    listItems={["Tasting and Pairings",
                                "Wine Blendings",
                                "Custom Wine Bottles"
                    ]}
                />
            </div>

            <div className="wine-experiencepage__about--side wine-experiencepage__about--image">
                image
            </div>     
        </section>

        <section className="wine-experiencepage__tasting-and-pairings wine-experiencepage__section wrapper-width">
            <StyledHeading 
                heading="tasting & pairings"
            />

            <div className="wine-experiencepage__tasting-and-pairings__content">
                <CustomList 
                    listItems={[
                        "Learn about the wine making process while tasting Dalmatia's array of wines",
                        "See how wine is pressed",
                        "Pair your favorite wines with your choice of meal"
                    ]}
                />

                <div className="wine-experiencepage__tasting-and-pairings--image">
                    image
                </div>
            </div>
        </section>

        <section className="wine-experiencepage__wine-blendings wine-experiencepage__section">
            <LionBackground lionBackgroundClass="wine-experiencepage__wine-blendings--wrapper">
                <StyledHeading 
                    heading="wine blendings"
                    text="create or try wine blendings specialized for your palate & take home a bottle of your custom blend"
                />
            </LionBackground>
        </section>

        <section className="wine-experiencepage__custom-bottles wine-experiencepage__section">
            <StyledHeading 
                heading="custom wine bottles"
            />
            <div className="wine-experiencepage__custom-bottles__content wrapper-width">

                <div className="wine-experiencepage__custom-bottles__sec wine-experiencepage__custom-bottles__sec--1">
                    <div className="wine-experiencepage__custom-bottles__sec--text wine-experiencepage__custom-bottles__sec--1--text">
                        <ParagraphHeading 
                            title="Design and bring home a personalized wine bottle,"
                        />
                        <p>
                            consectetur adipisicing elit. Aliquam corrupti, aliquid velit aspernatur expedita tempora recusandae a reiciendis ut repellendus fugit, doloribus exercitationem? Molestias eveniet vero eius eaque quasi laudantium.   
                        </p>
                    </div>
                    <div className="wine-experiencepage__custom-bottles__sec--picture wine-experiencepage__custom-bottles__sec--1--picture">
                        picture
                    </div>
                </div>

                <div className="wine-experiencepage__custom-bottles__sec wine-experiencepage__custom-bottles__sec--2">
                    <div className="wine-experiencepage__custom-bottles__sec--text wine-experiencepage__custom-bottles__sec--2--text">
                        <ParagraphHeading 
                            title="Different wine bottles to choose from,"
                        />
                        <p>
                            consectetur adipisicing elit. Aliquam corrupti, aliquid velit aspernatur expedita tempora recusandae a reiciendis ut repellendus fugit, doloribus exercitationem? Molestias eveniet vero eius eaque quasi laudantium.   
                        </p>
                    </div>
                    <div className="wine-experiencepage__custom-bottles__sec--picture wine-experiencepage__custom-bottles__sec--2--picture">
                        picture
                    </div>
                </div>

                <div className="wine-experiencepage__custom-bottles__sec wine-experiencepage__custom-bottles__sec--3">
                    <div className="wine-experiencepage__custom-bottles__sec--text wine-experiencepage__custom-bottles__sec--3--text">
                        <ParagraphHeading 
                            title="Personalize other items with your personal design,"
                        />
                        <p>
                            consectetur adipisicing elit. Aliquam corrupti, aliquid velit aspernatur expedita tempora recusandae a reiciendis ut repellendus fugit, doloribus exercitationem? Molestias eveniet vero eius eaque quasi laudantium.   
                        </p>
                    </div>
                    <div className="wine-experiencepage__custom-bottles__sec--picture wine-experiencepage__custom-bottles__sec--3--picture">
                        picture
                    </div>
                </div>
            </div>
            
        </section>
    </div>
);

export default WineExperiencePage;