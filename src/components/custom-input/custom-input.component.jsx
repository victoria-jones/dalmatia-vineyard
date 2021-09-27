import React from 'react';

import MoreInfo from '../more-info/more-info.component';

import './custom-input.styles.scss';

const CustomInput = ({ type, id, label, inputClassName, labelClassName, moreInfo }) => {

    switch(type) {
        case "textarea":
            return(
                <div className="custom-input__group">
                    <textarea 
                        id={id} 
                        name={id} 
                        className={`custom-input__message ${inputClassName}`}  
                        placeholder={label}
                        required      
                    ></textarea>
    
                    <label 
                        htmlFor={id} 
                        className={`custom-input__label ${labelClassName}`}
                    >
                        {label}
                    </label>
                    {
                        (moreInfo) ?
                        <MoreInfo 
                            hoverInfo={moreInfo}
                        />
                        :
                        null
                    }     
                </div>
            );

        
        case "checkbox" :
            return(
                <div className="custom-input__group custom-checkbox-input__group">
                    <div className="custom-input__checkbox--wrapper">
                        <input 
                            type={type} 
                            id={id} 
                            name={id} 
                            className={`custom-input__checkbox ${inputClassName}`}     
                        />

                        <label 
                            htmlFor={id} 
                            className={`custom-input__label-checkbox ${labelClassName}`}
                        >   
                            <div className="custom-input__checkbox--checkmark"></div>
                            {label}
                        </label>
                    </div>
                    {
                        (moreInfo) ?
                        <MoreInfo 
                            hoverInfo={moreInfo}
                        />
                        :
                        null
                    }
                </div>    
            );
        
        case "number" :
            return(
                <div className="custom-input__group">
                    <input 
                        type={type} 
                        id={id} 
                        name={id} 
                        className={`custom-input__input ${inputClassName}`} 
                        placeholder={label}
                        min="1" max="1000"
                        required    
                    />
                    <label 
                        htmlFor={id} 
                        className={`custom-input__label ${labelClassName}`}
                    >
                        {label}
                    </label>
                    {
                        (moreInfo) ?
                        <MoreInfo 
                            hoverInfo={moreInfo}
                        />
                        :
                        null
                    } 
                </div>    
            );
        
        default:
            return(
                <div className="custom-input__group">
                    <input 
                        type={type} 
                        id={id} 
                        name={id} 
                        className={`custom-input__input ${inputClassName}`}  
                        placeholder={label}
                        required      
                    />
                    <label 
                        htmlFor={id} 
                        className={`custom-input__label ${labelClassName}`}
                    >
                        {label}
                    </label>   
                    {
                        (moreInfo) ?
                        <MoreInfo 
                            hoverInfo={moreInfo}
                        />
                        :
                        null
                    } 
                </div>
            ); 

    }
    /*
    if (type === "textarea") {
        return(
            <div className="custom-input__group">
                <textarea 
                    id={id} 
                    name={id} 
                    className={`custom-input__message ${inputClassName}`}  
                    placeholder={label}
                    required      
                ></textarea>

                <label 
                    htmlFor={id} 
                    className={`custom-input__label ${labelClassName}`}
                >
                    {label}
                </label>     
            </div>
        );
    } else {
        return(
            <div className="custom-input__group">
                {
                    (type !== 'checkbox') ?
                        <input 
                            type={type} 
                            id={id} 
                            name={id} 
                            className={`custom-input__input ${inputClassName}`}  
                            placeholder={label}
                            required      
                        />
                        :
                        <div className="custom-input__checkbox--wrapper">
                            <input 
                                type={type} 
                                id={id} 
                                name={id} 
                                className={`custom-input__checkbox ${inputClassName}`}     
                            />
                        </div>
                }
                {
                    (type !== 'checkbox') ?
                    <label 
                        htmlFor={id} 
                        className={`custom-input__label ${labelClassName}`}
                    >
                        {label}
                    </label>
                    :
                    <label 
                        htmlFor={id} 
                        className={`custom-input__label-checkbox ${labelClassName}`}
                    >
                        {label}
                    </label>
                }
            {
                (moreInfo) ?
                <MoreInfo 
                    hoverInfo={moreInfo}
                />
                :
                null
            }  
            </div>
        );
    }
    */
    
}

export default CustomInput;