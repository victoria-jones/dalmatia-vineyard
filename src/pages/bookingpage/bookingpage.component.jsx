import React from 'react';

import BackgroundImage from '../../components/background-image/background-image.component';
import StyledHeading from '../../components/styled-heading/styled-heading.component';

import './bookingpage.styles.scss';

import backgroundImage from '../../assets/hero-background.jpg';

const BookingPage = () => (
    <div className="bookingpage main-content">
        <BackgroundImage image={backgroundImage} />
        <StyledHeading 
            heading="Booking"
            styledHeadingClass="bookingpage__title"
        />
    </div>
);

export default BookingPage;