import React from 'react';
import './styles.css';

const InputElement = ({ label, type, id, placeholder, description, handleOnChange, isLeft }) => {
    const myClass = 'search';
    return (
        <>
            { isLeft ?
                <label>{label}</label>
                : <label>{label} <br /></label>
            }
            <input 
                className={`form-control ${myClass}`}
                type={type}
                placeholder={placeholder}
                id={id}
                onChange={handleOnChange}
            />
            {description &&
                <small className="form-text text-muted">{description}</small>
            }
        </>
    );
};

export default InputElement;
