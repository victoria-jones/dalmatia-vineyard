import React from 'react';

import LionBackground from '../lion-background/lion-background.component';

import './footer.styles.scss';

const Footer = () => (
    <footer class="footer lion-background section-padding">
        <LionBackground lionBackgroundClass="footer--wrapper">
            <div className="footer__logo-wrapper">
                <div className="footer__logo-image"></div>
                <h3 className="footer__logo-text">Dalmatia</h3>
            </div>

            <section className="footer__nav">
                <div className="footer__nav__section footer__nav__section--1">
                    <h3 className="footer__nav__section--header footer__nav__section--header--1 header-style--1">Quick links</h3>
                    <ul className="footer__nav__list">
                        <li className="footer__nav__item"><span className="footer__nav__link">about us</span></li>
                        <li className="footer__nav__item"><span className="footer__nav__link">booking</span></li>
                        <li className="footer__nav__item"><span className="footer__nav__link">FAQ</span></li>
                    </ul>
                </div>

                <div className="footer__nav__section footer__nav__section--2">
                <h3 className="footer__nav__section--header footer__nav__section--header--2 header-style--1">Contact</h3>
                    <ul className="footer__nav__list">
                        <li className="footer__nav__item"><span className="footer__nav__link">contact us</span></li>
                        <li className="footer__nav__item"><span className="footer__nav__link">(555) 555 - 5555</span></li>
                        <li className="footer__nav__item">
                            <span className="footer__nav__link">
                                <span className="footer__nav__link--span">555 Vineyard Way</span>Tree Town CA 55555
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="footer__nav__section footer__nav__section--3">
                <h3 className="footer__nav__section--header footer__nav__section--header--3 header-style--1">Quick links</h3>
                    <ul className="footer__nav__list">
                        <li className="footer__nav__item"><span className="footer__nav__link">theme 1</span></li>
                        <li className="footer__nav__item"><span className="footer__nav__link">theme 2</span></li>
                        <li className="footer__nav__item"><span className="footer__nav__link">theme 3</span></li>
                    </ul>
                </div>
            </section>
        </LionBackground>
    </footer>
);

export default Footer;