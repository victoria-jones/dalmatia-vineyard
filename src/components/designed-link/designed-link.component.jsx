import React from 'react';

import './designed-link.style.scss';

import { ReactComponent as BranchImage } from '../../assets/SVG/branch.svg';

const DesignedLink = ({ linkClass, subtitle, title }) => (
    <div className={`designed-link
        ${linkClass ? linkClass : ''}
    `}>
        <div className="designed-link__branch-design designed-link__branch-design--1">
            <BranchImage className='designed-link__branch designed-link__branch--1' />
            <div className="designed-link__line"></div>
            <BranchImage className='designed-link__branch designed-link__branch--2' />
        </div>
        <div className="designed-link--wrapper">
            <span className="designed-link__text designed-link__text--subtitle">
                { subtitle }
            </span>
            <span className="designed-link__text designed-link__text--title">
                { title }
            </span>
        </div>
        <div className="designed-link__branch-design designed-link__branch-design--2">
            <BranchImage className='designed-link__branch designed-link__branch--1' />
            <div className="designed-link__line"></div>
            <BranchImage className='designed-link__branch designed-link__branch--2' />
        </div>
    </div>
);

export default DesignedLink;