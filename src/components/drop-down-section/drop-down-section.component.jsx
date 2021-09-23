import React from 'react';

import ParagraphHeading from '../../components/paragraph-heading/paragraph-heading.component';

import './drop-down-section.styles.scss';

const DropDownSection = ({ sectionClass, children, backgroundImage, title, synapse, arrowId }) => (
    <section className={`drop-down-section
        ${ sectionClass ? sectionClass : ''}
    `}
    >
        <div className="drop-down-section--wrapper sub-section-padding">
            <ParagraphHeading
                title={title}
            />
            <div className="drop-down-section__synapse">
                <div className="drop-down-section__synapse--p">
                    {synapse}
                </div>
            </div>
            <div className="drop-down-section__drop-down">
                <input type="checkbox" className="drop-down-section__drop-down__arrow--checkbox" id={arrowId} />
                <label for={arrowId} className=" drop-down-section__drop-down__arrow"> 
                    <div className="drop-down-section__drop-down__arrow--icon">
                    </div>
                </label>

                <div className="drop-down-section__drop-down__content">
                    {children}
                </div>
            </div>
        </div>
        
    </section>
);

export default DropDownSection;