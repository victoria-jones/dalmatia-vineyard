import React from 'react';

import './more-info.styles.scss';

const MoreInfo = ({ hoverInfo }) => (
    <div className="more-info">
        <div className="more-info--wrapper">
            <span className="more-info__icon">?</span>
        </div>
        <div className="more-info__information">
            { hoverInfo }
        </div> 
    </div>
);

export default MoreInfo;