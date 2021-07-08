import React from 'react';

import './styled-secondary-heading.styles.scss';

const StyledSecondaryHeading = ({ children }) => (
    <div className="styled-secondary-heading">
    <h3 className="styled-secondary-heading__heading"
    >
        { children }
    </h3>
    </div>
);

export default StyledSecondaryHeading;