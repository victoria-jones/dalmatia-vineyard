import React from 'react';

import StyledHeading from '../../components/styled-heading/styled-heading.component';
import BackgroundImage from '../../components/background-image/background-image.component';

import './not-found.styles.scss';

import backgroundImage from '../../assets/hero-background.jpg';

const NotFound = () => (
    <section className="not-found main-content min-page-height">
        <BackgroundImage image={backgroundImage} />
        <StyledHeading 
            heading="Page Not Found"
            subheading="this page doesn't exist"
            styledHeadingClass="contactpage__title page-title"
        />
    </section>
);

export default NotFound;