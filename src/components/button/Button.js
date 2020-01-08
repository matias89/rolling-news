import React from 'react';

export default class Button extends React.Component {
    
  render (){
    const { id, type, size, color, onClick, text } = this.props;
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
  }

}