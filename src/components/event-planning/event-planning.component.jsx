import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import StyledHeading from '../styled-heading/styled-heading.component';
import Checkerboard from '../checkerboard/checkerboard.component';

import './event-planning.styles.scss';

const EventPlanning = () => (
    <section className="event-planning section-padding">
        <div className="event-planning--wrapper">
            <div className="event-planning__side event-planning__side--1">
                <div className="event-planning__heading">
                    <StyledHeading
                        subheading="all inclusive"
                        heading="event planning"
                        text="for a stress free experience"
                    />
                </div>

                <div className="event-planning__text">
                    <p className="event-planning__p">
                        Take away the stress of planning your special event with Dalamtia's all inclusive event planning.
                        Learn more about what's included:
                    </p>
                </div>

                <CustomButton red link="events" buttonClass="event-planning__button">learn more</CustomButton>

            </div>
            
            <Checkerboard checkboardClass="event-planning__side event-planning__side--2" />
        </div>
    </section>
);

export default EventPlanning;