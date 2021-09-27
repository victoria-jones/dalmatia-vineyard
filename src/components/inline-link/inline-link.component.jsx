import React from 'react';
import { Link } from 'react-router-dom';

import './inline-link.styles.scss';

const InlineLink = ({ children, linkTo }) => (
    <div className="inlineLink">
        <Link
            className="inlineLink__link"
            to={linkTo}
        >
            { children }
        </Link>
    </div>
);

export default InlineLink