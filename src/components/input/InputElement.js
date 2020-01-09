import React from 'react';
import './styles.css';

const InputElement = ({ label, type, id, placeholder, description, handleOnChange, onLeft, value }) => {
    const labelOnLeft = onLeft ? 'col-form-label pr-2' : '';
    const inputInline = onLeft ? 'd-inline w-50' : '';
    return (
        <>
            <label className={`${labelOnLeft}`}>{label}</label>
            <input 
                className={`form-control ${inputInline}`}
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
