import React, { useState, useEffect } from 'react';


const InputElement = ({ label, type, id, placeholder, description }) => {
    const [inputValue, setInputValue] = useState('');
    console.log(inputValue);

    return (
        <>
            {
                label &&
                <label htmlFor={id}>{label} <br /></label>
            }
                <input 
                    className="form-control"
                    value={inputValue} 
                    type={type} 
                    id={id} 
                    placeholder={placeholder}
                    onChange={(ev) => setInputValue(ev.target.value)} />
                {
                    description && 
                    <small className="form-text text-muted">{description}</small>
                }
        </>
    );
};

export default InputElement;
