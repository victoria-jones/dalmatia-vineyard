import React from 'react';

import LionBackground from '../lion-background/lion-background.component';
import CustomCard from '../custom-card/custom-card.component';
import CustomButton from '../custom-button/custom-button.component';
import StyledHeading from '../styled-heading/styled-heading.component';

import weddingTheme_01 from '../../assets/wedding-theme_01.jpg';
import weddingTheme_02 from '../../assets/wedding-theme_02.jpg';
import weddingTheme_03 from '../../assets/wedding-theme_03.jpg';

import './weddings-and-events.styles.scss';

const WeddingsAndEvents = () => {
    const backgroundImages = [
        weddingTheme_01,
        weddingTheme_02,
        weddingTheme_03
    ];

    const cardTitles = [
        "Theme Title One",
        "Theme Title Two",
        "Theme Title Three"
    ];
    
    return (
        <section className="weddings-and-events section-padding">
            <LionBackground lionBackgroundClass="weddings-and-events--wrapper wrapper-width">
                <StyledHeading 
                    styledHeadingClass="weddings-and-events__heading"
                    subheading="custom and themed"
                    heading="weddings and events"
                    text="see some of Dalmatia's specialized themes or work with our event planner to create your own"
                />
                <div className="weddings-and-events__cards sub-section-padding">
                    {backgroundImages.map(image =>
                        <CustomCard 
                            backgroundImage={image}
                            cardTitle={cardTitles[backgroundImages.indexOf(image)]}
                            key={backgroundImages.indexOf(image)}
                        />
                    )}
                </div>
                <CustomButton 
                    red 
                    link=""
                    buttonClass="weddings-and-events__button"
                > 
                    learn more
                </CustomButton>
            </LionBackground>
        </section>
    );
}

export default WeddingsAndEvents;