import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import BackgroundImage from '../../components/background-image/background-image.component';
import StyledHeading from '../../components/styled-heading/styled-heading.component';
import CustomInput from '../../components/custom-input/custom-input.component';
import ParagraphHeading from '../../components/paragraph-heading/paragraph-heading.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import InlineLink from '../../components/inline-link/inline-link.component';

import './bookingpage.styles.scss';

import backgroundImage from '../../assets/hero-background.jpg';

const BookingPage = () => {

    //For displaying or hiding the second date picker
    const [extendedDatePicker, setExtendedDatePicker] = useState(false);

    //if extendedDateCheckbox is checked set extendedDatePicker to true
    useEffect(() => {
        const extendDateCheckbox = document.getElementById("increasedDateRange");

        const handleExtendDate = () => {
            if(extendDateCheckbox.checked) {
                setExtendedDatePicker(true);    
                
            } else {
                setExtendedDatePicker(false);
                
            }
        }

        //event listener for date extender checkbox
        extendDateCheckbox.addEventListener("change", handleExtendDate);

        //cleanup
        return () => extendDateCheckbox.removeEventListener("change", handleExtendDate);
    
    },[]);

    return (
        <div className="bookingpage main-content">
            <BackgroundImage image={backgroundImage} />
            <StyledHeading 
                heading="Booking"
                styledHeadingClass="bookingpage__title page-title"
            />

            <div className="bookingpage__text">
                <p className="bookingpage__text--p">
                    Fill out the booking form with your information and an event specialist will get back to you to discuss your event.
                    No dates are guaranteed until an event specialist speaks to you about your event.
                    You can also contact us directly by phone: 
                    <span className="bookingpage__text--phone">(555) 555 - 5555</span>
                </p>
            </div>

            <div className="bookingpage__booking-form wrapper-width-condensed">
                <div className="bookingpage__booking-form--wrapper">
                    <form action="#" className="custom-form__form bookingpage__booking-form__form">
                        <fieldset className="custom-form__fieldset bookingpage__booking-form__fieldset">
                            <legend className="custom-form__legend bookingpage__booking-form__legend">
                                <ParagraphHeading title="Contact Information" />
                            </legend>
                            <CustomInput
                                type="text"
                                id="name"
                                label="Name" 
                                inputClassName="bookingpage__booking-form__input"
                            />
                            <CustomInput
                                type="email"
                                id="email"
                                label="Email" 
                                inputClassName="bookingpage__booking-form__input"
                            />
                        </fieldset>

                        <fieldset className="custom-form__fieldset bookingpage__booking-form__fieldset">
                            <legend className="custom-form__legend bookingpage__booking-form__legend">
                                <ParagraphHeading title="Event Information" />
                            </legend>
                            <p className="custom-form__form-information">
                                Choose your preferred date/s. Nothing is guaranteed until an event specialist gets back to you about your requested date/s.
                            </p>
                            <CustomInput
                                type="date"
                                id="date"
                                label="Event date" 
                                inputClassName="bookingpage__booking-form__input"
                            />
                            
                            <CustomInput
                                type="checkbox"
                                id="increasedDateRange"
                                label="My event will last more than 1 day" 
                                inputClassName="bookingpage__booking-form__checkbox"
                                moreInfo="if your event will span more than one day check this box to select how many days your event will be"
                            />

                            {
                                extendedDatePicker ?

                                <CustomInput
                                    type="number"
                                    id="eventLength"
                                    label="# of Days of Event" 
                                    inputClassName="bookingpage__booking-form__input bookingpage__booking-form__input--date-extend"
                                    labelClassName="bookingpage__booking-form__input--label-date-extend"
                                />

                                :

                                null

                            }
                            

                            <CustomInput
                                type="number"
                                id="attendees"
                                label="# of Attendees"
                                inputClassName="bookingpage__booking-form__input" 
                            />
                        </fieldset>

                        <fieldset className="custom-form__fieldset bookingpage__booking-form__fieldset">
                            <legend className="custom-form__legend bookingpage__booking-form__legend">
                                <ParagraphHeading title="Dalmatia Event Planning" />
                            </legend>
                                <p className="custom-form__form-information">
                                    Dalamatia has optional all inclusive event planning.
                                    This can include: Dalmatia provided event planner, catering, photography, themed events (theme options are available), custom wine bottle designs or other take home souvenirs.
                                    Learn more about Dalmatia's inclusive event planning on the <InlineLink linkTo="/events">events page</InlineLink>.
                                </p>
                            <CustomInput
                                type="checkbox"
                                id="inclusiveEventPlanning"
                                label="I am interested in Dalamatia's inclusive event planning" 
                            />
                            <CustomInput
                                type="checkbox"
                                id="inclusiveThemedEvent"
                                label="I am interested in Dalamatia's themed events"
                                moreInfo={"Dalmatia has some preplanned event themes to choose from, or you can work with an event planner to create your own themed event. more about themed events can be found on the events page"} 
                            />
                        </fieldset>

                        <fieldset className="custom-form__fieldset bookingpage__booking-form__fieldset">
                            <legend className="custom-form__legend bookingpage__booking-form__legend">
                                <ParagraphHeading title="Additional Information" />
                            </legend>
                                <p className="custom-form__form-information">
                                    Please provide details about your event and any questions you have. A Dalmatia Event Specialist will be in touch with you soon to talk to you about your event.
                                </p>
                            <CustomInput
                                type="textarea"
                                id="message"
                                label="Message" 
                            />
                        </fieldset>
                        
                        <div className="custom-form__group">
                            <CustomButton
                                link=""
                                red
                                buttonClass="form-input"
                            >
                                submit
                            </CustomButton>
                        </div>
                    </form>
                </div> 
            </div>
        </div>
    );

}
export default BookingPage;