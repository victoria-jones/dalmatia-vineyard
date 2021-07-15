import React from 'react';

import Hero from '../../components/hero/hero.component';
import EventPlanning from '../../components/event-planning/event-planning.component';
import WeddingsAndEvents from '../../components/weddings-and-events/weddings-and-events.component';
import CustomForm from '../../components/custom-form/custom-form.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <Hero />
        <EventPlanning />
        <WeddingsAndEvents />
        <CustomForm /> 
        <div> gallery </div>
    </div>
);

export default HomePage;