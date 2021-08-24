import React from 'react';

import './paragraph-heading.styles.scss';

const ParagraphHeading = ({ title }) => (
    <div className="paragraph-heading--wrapper">
        <h3 className="paragraph-heading__title">{ title }</h3>
    </div>
);

export default ParagraphHeading;