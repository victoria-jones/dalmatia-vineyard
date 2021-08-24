import React from 'react';

import StyledHeading from '../../components/styled-heading/styled-heading.component';
import BackgroundImage from '../../components/background-image/background-image.component';
import CustomForm from '../../components/custom-form/custom-form.component';

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium unde quaerat neque. Iure aliquam veritatis maiores quia recusandae ipsam voluptates! Dicta officiis repudiandae accusamus ad aperiam libero, quaerat necessitatibus ab.
            </p>
        </div>
        <div className="contactpage__contact-form">
            <CustomForm 
                subheading="let's get in touch"
                heading="contact us"
                text="send us your questions, comments, and inquiries"
            />
        </div>
    </div>
);

export default ContactPage;