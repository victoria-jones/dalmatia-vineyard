import React from 'react';

import './styled-secondary-heading.styles.scss';

const StyledSecondaryHeading = ({ children, secondaryStyling }) => (
        <div className={`styled-secondary-heading
            ${secondaryStyling ? 'styled-secondary-heading--secondary-styles' : ''}
        `}>
        <h3 className={`styled-secondary-heading__heading
            ${secondaryStyling ? 'styled-secondary-heading__heading--secondary-styles' : ''}
        `}>
            { children }
        </h3>
        </div>
);
export default StyledSecondaryHeading;