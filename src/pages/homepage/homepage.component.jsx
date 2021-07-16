import React from 'react';

import Hero from '../../components/hero/hero.component';
import EventPlanning from '../../components/event-planning/event-planning.component';
import WeddingsAndEvents from '../../components/weddings-and-events/weddings-and-events.component';
import CustomForm from '../../components/custom-form/custom-form.component';
import Gallery from '../../components/gallery/gallery.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <Hero />
        <EventPlanning />
        <WeddingsAndEvents />
        <CustomForm /> 
        <Gallery />
    </div>
);

export default HomePage;