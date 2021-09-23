import React from 'react';

import BackgroundImage from '../../components/background-image/background-image.component';
import StyledHeading from '../../components/styled-heading/styled-heading.component';
import DropDownSection from '../../components/drop-down-section/drop-down-section.component';
import EventPlanning from '../../components/event-planning/event-planning.component';

import './eventspage.styles.scss';

import backgroundImage from '../../assets/hero-background.jpg';

const EventsPage = () => (
    <div className='eventspage main-content'>
        <BackgroundImage image={backgroundImage} />
        <StyledHeading 
            heading="Events at Dalmatia"
            styledHeadingClass="eventspage__title"
        />

        <section className="eventspage__events-at-dalmatia wrapper-width sub-section-padding">

            <div className="eventspage__events-at-dalmatia__side eventspage__events-at-dalmatia__side--1">
                <div className="eventspage__events-at-dalmatia__side--heading">
                    <StyledHeading
                        subheading="special"
                        heading="Events"
                        text="at Dalmatia Vineyard Estate"
                    />
                </div>
                
                <div className="eventspage__events-at-dalmatia__side--text">
                    <div className="eventspage__events-at-dalmatia--p">
                        Dalmatia offers all inclusive event planning for your wedding, special event, or group gathering. 
                        Take advantage of our in-house event planner to create a stress free and memorable event with
                        event specific catering, design, photography, custom wine bottles, and more.
                    </div>
                </div>
            </div>

            <div className="eventspage__events-at-dalmatia__side eventspage__events-at-dalmatia__side--2">
                <div className="eventspage__events-at-dalmatia__side--image">
                    image
                </div>
            </div>
            
        </section>

        <section className="eventspage__types-of-events">
            <DropDownSection 
                sectionClass="eventspage__types-of-events__drop-section eventspage__types-of-events__drop-section--weddings"
                title="weddings"
                synapse="wedding drop down section synapse"
                arrowId="drop-down-section-weddings"
            >
                wedding drop down section drop down area
                <br />
                <br />
                <br />
                <br />
                <br />
                testing the size
            </DropDownSection>

            <DropDownSection 
                sectionClass="eventspage__types-of-events__drop-section eventspage__types-of-events__drop-section--special-event"
                title="special events"
                synpase="special event drop down section synapse"
                arrowId="drop-down-section-special-event"
            >
                special event drop down section drop down area
            </DropDownSection>

            <DropDownSection 
                sectionClass="eventspage__types-of-events__drop-section eventspage__types-of-events__drop-section--themed-events"
                title="themed events"
                synpase="themed events drop down section synapse"
                arrowId="drop-down-section-themed"
            >
                themed events drop down section drop down area
            </DropDownSection>
        </section>

        <section className="eventspage__inclusive-event-planning wrapper-width">
            <EventPlanning />
        </section>

        <section className="eventspage__booking wrapper-width">
            book at event with dalmatia
        </section>
    </div>
);

export default EventsPage;