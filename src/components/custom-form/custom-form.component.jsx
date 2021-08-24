import React from 'react';

import './custom-form.styles.scss';

import ImageBoxBordered from '../image-box-bordered/image-box-bordered.component';
import StyledHeading from '../styled-heading/styled-heading.component';
import CustomButton from '../custom-button/custom-button.component';

import corks from '../../assets/corks.jpg';

const CustomForm = ({ subheading, heading, text }) => (
    <section className="custom-form section-padding">
        <ImageBoxBordered
            backgroundImage={corks}
            imageBoxClass="custom-form--wrapper"
            transparent
        >
            <div className="custom-form__form-wrapper">
                <form action="#" className="custom-form__form">
                    <div className="custom-form__group">
                        <input type="text" id="name" name="name" className="custom-form__input"  placeholder="Name" required/>
                        <label htmlFor="name" className="custom-form__label">Name</label>
                    </div>
                    <div className="custom-form__group">
                        <input type="email" id="email" name="email" className="custom-form__input"  placeholder="Email" required/>
                        <label htmlFor="name" className="custom-form__label">Email</label>
                    </div>
                    <div className="custom-form__group">
                        <textarea id="message" name="message" className="custom-form__message" placeholder="Message"></textarea>
                        <label htmlFor="name" className="custom-form__label">Message</label>
                    </div>
                    <div className="custom-form__group">
                        <CustomButton
                            link=""
                            white
                            buttonClass="form-input"
                        >
                            send
                        </CustomButton>
                    </div>
                </form>
            </div>

            <div className="custom-form__heading">
                <StyledHeading
                    subheading={subheading}
                    heading={heading}
                    text={text}
                />
            </div>
        </ImageBoxBordered>
    </section>
);

export default CustomForm;