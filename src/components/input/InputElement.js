import React from 'react';
import './styles.css';

const InputElement = ({ label, type, id, placeholder, description, handleOnChange, isLeft, value }) => {
    const myClass = 'search';
    return (
        <>
            { isLeft ?
                <label>{label}</label>
                : <label>{label} <br /></label>
            }
            <input 
                className={`form-control ${myClass}`}
                value={value}
                type={type}
                placeholder={placeholder}
                id={id}
                onChange={event => handleOnChange(event)}
            />
            {description &&
                <small className="form-text text-muted">{description}</small>
            }
        </>
    );
};

export default InputElement;
