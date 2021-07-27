import React, { useEffect, useState } from 'react';

import ImageBoxBordered from '../image-box-bordered/image-box-bordered.component';

import './carousel.styles.scss';

const Carousel = ({ children, carouselClass, carouselImages }) => {

    const [carouselCount, setCarouselCount] = useState(0);
    const [carouselMarkerLocation, setCarouselMarkerLocation] = useState();
    //indicate if carousel will run on autorun (boolean);
    const [runCarousel, setRunCarousel] = useState(true);

    //the time between carousel slides
    const carouselInterval = 5000;
    //carousel slides
    const carouselImageDivs = document.getElementsByClassName('carousel__image');
    //used to set the interval
    let autoSlide;

    //new test carousel 

    //start the auto carousel on page load
    useEffect(() => {
        autoCarousel();

        //cleanup interval, prevent state change when component unmounts
        return () => {
            cancelAutoCarousel();
        }
    });

    //run the automatic carousel
    const autoCarousel = () => {
        setRunCarousel(true);
        autoSlide = runCarousel ? setInterval(nextSlide, carouselInterval) : null;

        //set carouselMarker location
        moveCarouselMarker();
        //set current slide here
        setCurrentCarouselImage();
    };

    //set the next slide count
    const nextSlide = () => {
        cancelAutoCarousel();

        if(carouselCount >= carouselImageDivs.length-1) {
            setCarouselCount(0);
        } else {
            setCarouselCount(carouselCount+1);
        }
    };

    //cancel the auto carousel and remove the interval
    const cancelAutoCarousel = () => {
        setRunCarousel(false);
        clearInterval(autoSlide);
    };

    //move the carousel diamond marker to match the current slide image
    const moveCarouselMarker = () => {
        const carouselDiamonds = document.getElementsByClassName("carousel__location-marker--diamond");
        setCarouselMarkerLocation(carouselDiamonds[carouselCount].offsetLeft);

        let carouselMarker = document.getElementsByClassName("carousel__location-marker--diamond-highlight")[0];
        const markerMovement = (carouselMarkerLocation - 8)/10;

        carouselMarker.style.left = `${markerMovement}rem`;
    };

    //set the slide image to the current caoruselCount
    const setCurrentCarouselImage = () => {
        //set display of current carousel point and hide others
        for(let i = 0; i < carouselImageDivs.length; i++) {
            carouselImageDivs[i].style.display = "none";
        }
        carouselImageDivs[carouselCount].style.display = "flex";
    };

    //set marker location when user clicks the diamond
    const moveCarouselPosition = (target) => {
        setRunCarousel(false);
        const diamondParent = target.parentNode;
        const diamondPosition = (Array.from(diamondParent.children).indexOf(target)) - 1;

        setCarouselCount(diamondPosition);
    }

    return(
        <div className={`carousel
            ${carouselClass ? carouselClass : ''}
        `}>
            <div className="carousel--wrapper">
                {children}
                <div className="carousel__location-marker">
                    <div className="carousel__location-marker--diamond-highlight">&#9670;</div>
                    {carouselImages.map(image => 
                        <div 
                            className={`carousel__location-marker--daimond--0${carouselImages.indexOf(image)} carousel__location-marker--diamond`}
                            key={carouselImages.indexOf(image)}
                            onClick={(e) => moveCarouselPosition(e.target)} 
                        >
                            &#9670;
                        </div>
                    )}
                </div>
            </div>

            <div className="carousel__images">
                {carouselImages.map(image =>
                    <ImageBoxBordered 
                        backgroundImage={image} 
                        key={carouselImages.indexOf(image)} 
                        imageBoxClass={`carousel__image--${carouselImages.indexOf(image)} carousel__image`} 
                        transparent>
                    </ImageBoxBordered>
                )}
            </div>
        </div>  
    );

};

export default Carousel;