import React from 'react';

import './styled-heading.styles.scss';

const StyledHeading = ({ subheading, heading, text, styledHeadingClass }) => (
    <div className={`styled-heading
                    ${styledHeadingClass ? styledHeadingClass : ''}
    `}>
        <span className="styled-heading__subheading pre-header-font">{ subheading }</span>
        <h2 className="styled-heading__heading header-font header-style header-style--2">{ heading }</h2>
        <span className="styled-heading__text">{ text }</span>
    </div>
);

export default StyledHeading;