import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import ImageBoxBordered from '../image-box-bordered/image-box-bordered.component';
import Carousel from '../carousel/carousel.component';
import DesignedLink from '../designed-link/designed-link.component';

import './hero.styles.scss';

import weddingImage from '../../assets/wedding.jpg';
import eventImage from '../../assets/event-planning.jpg';
import carouselImage_01 from '../../assets/carousel/vineyard-carousel_01.jpg';
import carouselImage_02 from '../../assets/carousel/vineyard-carousel_02.jpg';
import carouselImage_03 from '../../assets/carousel/vineyard-carousel_03.jpg';
import carouselImage_04 from '../../assets/carousel/vineyard-carousel_04.jpg';

const Hero = () => {
    const carouselImages = [
        carouselImage_01,
        carouselImage_02,
        carouselImage_03,
        carouselImage_04
    ];

    return (
        <section className="hero">
            <div className="hero--wrapper">

                <Carousel carouselClass="hero__carousel"
                            carouselImages={carouselImages}      
                >
                    <div className="carousel__container hero__carousel--container">
                        <div className="hero__header">
                            <div className="hero__header--logo-img"></div>
                            <h1 className="hero__header--logo logo-font">Dalmatia</h1>
                            <h2 className="hero__header--subhead header-font">Vineyard Estate</h2>
                        </div>
                        <div className="hero__cta">
                            <span className="hero__cta--text">
                                host special events and weddings
                            </span>
                            <CustomButton white link="" buttonClass="hero__button">learn more</CustomButton>
                        </div>
                    </div>
                </Carousel>

                <div className="hero__highlight hero__highlight--weddings">
                    <ImageBoxBordered backgroundImage={weddingImage}>
                        <CustomButton white link="" buttonClass="hero__button hero__highlight-button">weddings</CustomButton>
                    </ImageBoxBordered>
                </div>

                <div className="hero__highlight hero__highlight--event-planning">
                    <ImageBoxBordered backgroundImage={eventImage}>
                        <CustomButton white link="" buttonClass="hero__button hero__highlight-button">event planning</CustomButton>
                    </ImageBoxBordered>
                </div>

                <div className="hero__carousel-highlights">
                    <DesignedLink 
                        linkClass="hero__carousel-highlight hero__carousel-highlight--1"
                        subtitle="special"
                        title="events" 
                    />

                    <DesignedLink 
                        linkClass="hero__carousel-highlight hero__carousel-highlight--2"
                        subtitle="personalized"
                        title="wine bottles" 
                    />

                    <DesignedLink 
                        linkClass="hero__carousel-highlight hero__carousel-highlight--3"
                        subtitle="all inclusive"
                        title="event planning" 
                    />

                    <DesignedLink 
                        linkClass="hero__carousel-highlight hero__carousel-highlight--4"
                        subtitle="personalized"
                        title="wine experience" 
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;