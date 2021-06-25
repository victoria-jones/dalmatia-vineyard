import React, { useEffect, useState } from 'react';

import ImageBoxBordered from '../image-box-bordered/image-box-bordered.component';

import './carousel.styles.scss';

const Carousel = ({ children, carouselClass, carouselImages }) => {

    //const [carouselImages, setCarouselImages] = useState([]);
    const [carouselCount, setCarouselCount] = useState(0);
    const [carouselMarkerLocation, setCarouselMarkerLocation] = useState();
    const [runCarousel, setRunCarousel] = useState(true);

    //take images as props
        //map images to ImageBorderBox objs
    //(optional) take children to fill inside carousel. (on top of images)

    //start the carousel
    useEffect(() => {
        let carouselTimeout;
        const carouselImageDivs = document.getElementsByClassName('carousel__image');

        if(runCarousel) {
            carouselTimeout = setTimeout(() => {
                setCarouselCount(carouselCount+1);
            }, 1000);
        }
        
            /*const autoMoveCarousel = () => {
                setTimeout(() => {
                    setCarouselCount(carouselCount+1);
                }, 5000); 
            }*/

            
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

        //change the carousel marker location
        const carouselDiamonds = document.getElementsByClassName("carousel__location-marker--diamond");
        setCarouselMarkerLocation(carouselDiamonds[carouselCount].offsetLeft);
        
        //carousel timer
        /*setTimeout(() => {
            setCarouselCount(carouselCount+1);
        }, 5000);*/ 

        //autoMoveCarousel();

        //cleanup 
        /*
            currently the bc of how this is setup, the carousel will stop moving when it hits 0 again
            how do it get it moving?
        */
        return () => clearTimeout(carouselTimeout);
        

    }, [carouselCount, runCarousel]);

    //set Carousel marker location
    useEffect(() => {
        let carouselMarker = document.getElementsByClassName("carousel__location-marker--diamond-highlight")[0];
        const markerMovement = (carouselMarkerLocation - 8)/10;

        carouselMarker.style.left = `${markerMovement}rem`;
    }, [carouselMarkerLocation]);

    

    //carousel functionality
    /*const runCarousel = () => {
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

        //change the carousel marker location
        const carouselDiamonds = document.getElementsByClassName("carousel__location-marker--diamond");
        setCarouselMarkerLocation(carouselDiamonds[carouselCount].offsetLeft);
        
        //carousel timer
        setTimeout(() => {
            setCarouselCount(carouselCount+1);
        }, 5000);
    }*/

    //set marker location when user clicks the diamond
    const moveCarouselPosition = (target) => {
        const diamondParent = target.parentNode;
        const diamondPosition = (Array.from(diamondParent.children).indexOf(target)) - 1;
        console.log(`move carousel position to: ${diamondPosition}`);

        //setCarouselMarkerLocation(diamondPosition);
        setCarouselCount(diamondPosition);
        setRunCarousel(false);
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