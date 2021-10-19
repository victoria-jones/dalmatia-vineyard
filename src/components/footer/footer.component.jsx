import React from 'react';

import { Link } from 'react-router-dom';
import LionBackground from '../lion-background/lion-background.component';
import IconLink from '../icon-link/icon-link.component';

import dalmatiaSeal from '../../assets/logo/dalmatia-seal_100px.png';

import './footer.styles.scss';

const Footer = () => (
    <footer className="footer lion-background section-padding">
        <LionBackground lionBackgroundClass="footer--wrapper wrapper-width">
            <div className="footer__logo-wrapper">
                <div className="footer__logo-image">
                    <img src={dalmatiaSeal} alt="dalmatia seal" className="footer__logo-image--image" />
                </div>
                <h3 className="footer__logo-text">Dalmatia</h3>
            </div>

            <section className="footer__nav">
                <div className="footer__nav__section footer__nav__section--1">
                    <h3 className="footer__nav__section--header footer__nav__section--header--1 header-style header-style--1">Quick links</h3>
                    <ul className="footer__nav__list">
                        <li className="footer__nav__item"><Link className="footer__nav__link" to="/about">about us</Link></li>
                        <li className="footer__nav__item"><Link className="footer__nav__link" to="/contact/booking">booking</Link></li>
                        <li className="footer__nav__item"><Link className="footer__nav__link" to="/">FAQ</Link></li>
                    </ul>
                </div>

                <div className="footer__nav__section footer__nav__section--2">
                <h3 className="footer__nav__section--header footer__nav__section--header--2 header-style header-style--1">Contact</h3>
                    <ul className="footer__nav__list">
                        <li className="footer__nav__item"><Link className="footer__nav__link" to="/contact">contact us</Link></li>
                        <li className="footer__nav__item"><Link className="footer__nav__link" to="/contact">(555) 555 - 5555</Link></li>
                        <li className="footer__nav__item">
                            <Link className="footer__nav__link" to="/contact">
                                <span className="footer__nav__link--span">555 Vineyard Way</span>Tree Town CA 55555
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="footer__nav__section footer__nav__section--3">
                <h3 className="footer__nav__section--header footer__nav__section--header--3 header-style header-style--1">Other Websites</h3>
                    <ul className="footer__nav__list">
                        <li className="footer__nav__item"><Link className="footer__nav__link" to="/">theme 1</Link></li>
                        <li className="footer__nav__item"><Link className="footer__nav__link" to="/">theme 2</Link></li>
                        <li className="footer__nav__item"><Link className="footer__nav__link" to="/">theme 3</Link></li>
                    </ul>
                </div>
            </section>

            <div className="footer__social-nav">
                <IconLink icon="facebook" link="#" />
                <IconLink icon="instagram" link="#" />
                <IconLink icon="twitter" link="#" />
                <IconLink icon="youtube" link="#" />
            </div>
        </LionBackground>
    </footer>
);

export default Footer;