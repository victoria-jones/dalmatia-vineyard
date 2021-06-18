import React from 'react';

import ImageBoxBordered from '../image-box-bordered/image-box-bordered.component';

import './carousel.styles.scss';

const Carousel = ({ children, carouselClass, carouselImages }) => {

    //const [carouselImages, setCarouselImages] = useState([]);

    //take images as props
        //map images to ImageBorderBox objs
    //(optional) take children to fill inside carousel. (on top of images)

    return(
        <div className={`carousel
            ${carouselClass ? carouselClass : ''}
        `}>
            <div className="carousel--wrapper">
                {children}
                <div className="carousel__location-marker">
                    <div className="carousel__location-marker--diamond-highlight">&#9670;</div>
                    <div className="carousel__location-marker--diamond">&#9670;</div>
                    <div className="carousel__location-marker--diamond">&#9670;</div>
                    <div className="carousel__location-marker--diamond">&#9670;</div>
                    <div className="carousel__location-marker--diamond">&#9670;</div>
                </div>
            </div>

            <div className="carousel__images" style={{ width: `${carouselImages.length*100}%` }}>
                {carouselImages.map(image =>
                    <ImageBoxBordered backgroundImage={image} key={carouselImages.indexOf(image)} imageBoxClass={`carousel__image--${carouselImages.indexOf(image)} carousel__image`}></ImageBoxBordered>
                )}
            </div>
        </div>  
    );

};

export default Carousel;