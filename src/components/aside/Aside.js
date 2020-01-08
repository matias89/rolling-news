import React, { Component } from 'react';
import PropTypes from "prop-types";

const Aside = () => {
    const title = React.createElement('h6', {className:'card-title'}, 'Card title');
    const img = React.createElement('img',{src: 'https://estaticos.elperiodico.com/resources/jpg/1/6/gato-1502194230861.jpg', className: 'img-top'});
    const cardBody= React.createElement('div', {className:'card-body'},[title,img]);
    const card= React.createElement('div', {className: 'card'}, [cardBody]);
   
    
    return(
        <div> {card} </div>         
    );
}

export default Aside;