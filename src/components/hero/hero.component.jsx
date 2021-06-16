import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import ImageBoxBordered from '../image-box-bordered/image-box-bordered.component';

import './hero.styles.scss';

import weddingImage from '../../assets/wedding.jpg';
import eventImage from '../../assets/event-planning.jpg';

const Hero = () => (
    <section className="hero">
        <div className="hero__carousel">
            <div className="carousel__container hero__carousel--container">
                <div className="hero__header">
                    <h1 className="hero__header--logo logo-font">Dalmatia</h1>
                    <h2 className="hero__header--subhead header-font">Vineyard Estate</h2>
                </div>
                <div className="hero__cta">
                    <span className="hero__cta--text">
                        host special events and weddings
                    </span>
                    <CustomButton white link="" buttonClass="hero__button">learn more</CustomButton>
                </div>
                <div className="hero__carousel__markers">carousel marker placeholder</div>
            </div>
        </div>

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
            <div className="hero__carousel-highlights hero__carousel-highlights--1">
                highlight 1
            </div>

            <div className="hero__carousel-highlights hero__carousel-highlights--2">
                highlight 2
            </div>

            <div className="hero__carousel-highlights hero__carousel-highlights--3">
                highlight 3
            </div>

            <div className="hero__carousel-highlights hero__carousel-highlights--4">
                highlight 4
            </div>
        </div>
    </section>
);

export default Hero;