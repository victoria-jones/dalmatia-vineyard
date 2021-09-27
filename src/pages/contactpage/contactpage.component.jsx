import React from 'react';
import { Link } from 'react-router-dom';

import StyledHeading from '../../components/styled-heading/styled-heading.component';
import BackgroundImage from '../../components/background-image/background-image.component';
import CustomForm from '../../components/custom-form/custom-form.component';
import InlineLink from '../../components/inline-link/inline-link.component';

import './contactpage.styles.scss';

import backgroundImage from '../../assets/hero-background.jpg';

const ContactPage = () => (
    <div className='contactpage main-content'>
        <BackgroundImage image={backgroundImage} />
        <StyledHeading 
            heading="Contact Us"
            styledHeadingClass="contactpage__title"
        />

        <div className="contactpage__text">
            <p className="contactpage__text--p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium unde quaerat neque. Iure aliquam veritatis maiores quia recusandae ipsam voluptates!
                If you are interested in booking an event visit out <InlineLink linkTo="/contact/booking">booking page</InlineLink>.
            </p>
        </div>
        <div className="contactpage__contact-form wrapper-width">
            <CustomForm 
                subheading="let's get in touch"
                heading="contact us"
                text="send us your questions, comments, and inquiries"
            />
        </div>
    </div>
);

export default ContactPage;