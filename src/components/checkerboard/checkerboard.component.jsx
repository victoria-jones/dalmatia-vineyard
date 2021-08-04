import React from 'react';

import StyledSecondaryHeading from '../styled-secondary-heading/styled-secondary-heading.component';

import './checkerboard.styles.scss';

import { ReactComponent as PersonalizedWineBottles } from '../../assets/SVG/wine-bottle.svg';
import { ReactComponent as PhotographyVideography } from '../../assets/SVG/camera.svg';
import { ReactComponent as PersonalizedInvitations } from '../../assets/SVG/invitation.svg';
import { ReactComponent as Catering } from '../../assets/SVG/plate.svg';
import { ReactComponent as EventPlanner } from '../../assets/SVG/rose.svg';
import { ReactComponent as WineExperience } from '../../assets/SVG/wine-glass.svg';

const Checkerboard = ({ checkerboardClass, checkerboardTitles }) => {

    const boxImages = [
        Catering,
        WineExperience,
        PersonalizedInvitations,
        PersonalizedWineBottles,
        PhotographyVideography,
        EventPlanner
    ];

    return (
        <section className={`checkerboard
                            ${checkerboardClass ? checkerboardClass : ''}
        `}>
            <div className="checkerboard__grid">
                {checkerboardTitles.map((title) => {
                    const SelectedImage = boxImages[checkerboardTitles.indexOf(title)];
                    
                    return (<div 
                        className={`checkerboard__grid__box checkboard__grid__box--${checkerboardTitles.indexOf(title)}`}
                        key={checkerboardTitles.indexOf(title)}
                    >
                        <SelectedImage
                            className={`checkerboard__grid__box__image checkerboard__grid__box__image--${checkerboardTitles.indexOf(title)}`} 
                        />
                        <StyledSecondaryHeading secondaryHeadingClass="checkerboard__grid__box__title">
                            {title}
                        </StyledSecondaryHeading>
                    </div> )
                })}
            </div>
        </section>
    );
}

export default Checkerboard;