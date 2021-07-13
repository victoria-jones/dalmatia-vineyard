import React from 'react';

import ImageBoxBordered from '../image-box-bordered/image-box-bordered.component';
import StyledSecondaryHeading from '../styled-secondary-heading/styled-secondary-heading.component';
import CustomButton from '../custom-button/custom-button.component';

import './custom-card.styles.scss';

const CustomCard = ({ backgroundImage, cardTitle }) => (
    <section className="custom-card">
        <ImageBoxBordered
            imageBoxClass="custom-card--wrapper"
            backgroundImage={backgroundImage}
            transparent
        >
            <StyledSecondaryHeading secondaryStyling>
                { cardTitle }
            </StyledSecondaryHeading>
            <CustomButton white link="">see this theme</CustomButton>
        </ImageBoxBordered>
    </section>
);

export default CustomCard;