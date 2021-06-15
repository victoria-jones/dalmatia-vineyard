import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import ImageBoxBordered from '../image-box-bordered/image-box-bordered.component';

import './hero.styles.scss';

import weddingImage from '../../assets/wedding.jpg';

const Hero = () => (
    <section className="hero">
        <div className="hero__carousel">
            <div className="imagebox-placeholder">
                <div className="hero__header">
                    <h1 className="hero__header--logo logo-font">Dalmatia</h1>
                    <h2 className="hero__header--subhead header-font">Vineyard Estate</h2>
                </div>
                <div className="hero__cta">
                    <span className="cta-font">
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
            <ImageBoxBordered>
                <CustomButton white link="" buttonClass="hero__button hero__highlight-button">event planning</CustomButton>
            </ImageBoxBordered>
        </div>
    </section>
);

export default Hero;