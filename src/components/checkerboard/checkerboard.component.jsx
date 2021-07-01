import React from 'react';

import './checkerboard.styles.scss';

const Checkerboard = ({ checkerboardClass }) => (
    <section className={`checkerboard
                        ${checkerboardClass ? checkerboardClass : ''}
    `}>
        <div className="checkerboard__grid">
            <div className="checkerboard__grid__box checkboard__grid__box--1">
                box 1
            </div>

            <div className="checkerboard__grid__box checkboard__grid__box--2">
                box 2
            </div>

            <div className="checkerboard__grid__box checkboard__grid__box--3">
                box 3
            </div>

            <div className="checkerboard__grid__box checkboard__grid__box--4">
                box 4
            </div>

            <div className="checkerboard__grid__box checkboard__grid__box--5">
                box 5
            </div>

            <div className="checkerboard__grid__box checkboard__grid__box--6">
                box 6
            </div>
        </div>
    </section>
);

export default Checkerboard;