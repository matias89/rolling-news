import React from 'react';

const Button = (props) => {
  const { id, type, size, color, onClick, text } = props;
  const myClass = `btn btn-${color} btn-${size}`;
  return (
    <button
      className={myClass} 
      id={id} 
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;