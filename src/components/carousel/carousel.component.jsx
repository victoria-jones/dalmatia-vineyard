import React, { useEffect, useState } from 'react';

import ImageBoxBordered from '../image-box-bordered/image-box-bordered.component';

import './carousel.styles.scss';

const Carousel = ({ children, carouselClass, carouselImages }) => {

    //const [carouselImages, setCarouselImages] = useState([]);
    const [carouselCount, setCarouselCount] = useState(0);
    const [carouselMarkerLocation, setCarouselMarkerLocation] = useState();

    //take images as props
        //map images to ImageBorderBox objs
    //(optional) take children to fill inside carousel. (on top of images)

    useEffect(() => {
        //autoCarousel(carouselCount);
        const carouselImageDivs = document.getElementsByClassName('carousel__image');
        if(carouselCount > carouselImageDivs.length-1) {
            return setCarouselCount(0);
        } else if (carouselCount < 0) {
            return setCarouselCount(carouselImageDivs.length-1);
        }

        //set display of current carousel point and hide others
        for(let i = 0; i < carouselImageDivs.length; i++) {
            carouselImageDivs[i].style.display = "none";
        }
        carouselImageDivs[carouselCount].style.display = "flex";
        

        //carousel timer
        setTimeout(() => {
            changeCarouselImage(carouselCount);
        }, 5000);
    },[carouselCount]);

    const autoCarousel = (currentCarouselCount) => {
        //carousel starting point
        
    }

    const changeCarouselImage = (currentCarouselCount) => {
        setCarouselCount(carouselCount+1);
    }

    const moveCarouselMarker = (target) => {
        const selectedImageOffset = target.offsetLeft;
        const carouselMarker = document.getElementsByClassName['carousel__location-marker--diamond-highlight'];
        console.log(target.offsetLeft);
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
                            className="carousel__location-marker--diamond" 
                            key={carouselImages.indexOf(image)}
                            onClick={(e) => moveCarouselMarker(e.target)}
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