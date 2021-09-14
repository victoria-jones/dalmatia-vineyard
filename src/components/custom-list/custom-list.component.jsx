import React from 'react';

import './custom-list.styles.scss';

const CustomList = ({ listItems }) => (
    <ul className="custom-list">
        {
            listItems.map(item => 
                <li 
                    className="custom-list__item"
                    key={`item--${listItems.indexOf(item)}`}
                >
                    {item}
                </li> 
            )
        }
    </ul>
);

export default CustomList;