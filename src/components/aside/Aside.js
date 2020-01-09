import React from 'react';
import PropTypes from "prop-types";

const Aside = (id,title,img) => {
    const titles = React.createElement('h6', {className:'card-title'}, title);
    const imgs = React.createElement('img',{src: img, className: 'img-top'},img);
    const cardBody= React.createElement('div', {className:'card-body' },[titles,imgs]);
    const cardId = React.createElement('h1',{className:'', key :`test_1_${id}`},id);
    const card= React.createElement('div', {className: 'card'}, [cardId,cardBody]);
    
    return(
        <div> {card} </div>         
    );
};

Aside.defaultProps ={
    id : 1,
    title : 'hola',
    img : 'https://estaticos.elperiodico.com/resources/jpg/1/6/gato-1502194230861.jpg'
};

Aside.prototype = {
    id : PropTypes.number,
    title : PropTypes.string,
    img : PropTypes.string
};

export default Aside;