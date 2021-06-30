import React from 'react';

import './lion-background.styles.scss';

import {ReactComponent as LionImage} from '../../assets/SVG/lion_outline.svg';

const LionBackground = ({ lionBackgroundClass, children }) => (
    <div className={`lion-background
        ${lionBackgroundClass ? lionBackgroundClass : ''}
    `}>
        { children }
        <div className="lion-background--image-wrapper">
            <LionImage className="lion-background__image lion-background__image--1" />
            <LionImage className="lion-background__image lion-background__image--2" />
        </div>
    </div>
);

export default LionBackground;