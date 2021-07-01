import React from 'react';

import Hero from '../../components/hero/hero.component';
import EventPlanning from '../../components/event-planning/event-planning.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <Hero />
        <EventPlanning />
        <div> weddings and events </div>
        <div> plann your own event </div> 
        <div> gallery </div>
    </div>
);

export default HomePage;