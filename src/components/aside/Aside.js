import React, { Component } from 'react';
import PropTypes from "prop-types";

const Aside = ({id,title,img}) => {
    const cardId = React.createElement('h1',{className:'' , key:`test_1_${id}`},{id});
    const titles = React.createElement('h6', {className:'card-title', key:`test_4_${id}`}, title);
    const imgs = React.createElement('img',{src: {img}, className: 'img-top', key:`test_3_${id}`},img);
    const cardBody= React.createElement('div', {className:'card-body' , key:`test_2_${id}`},[titles,imgs]);
    const card= React.createElement('div', {className: 'card', key:`test_5_${id}`}, [cardBody]);
    const container = React.createElement('div', {className:''},[cardId,card]);
    
    return(
        <div> {container} </div>         
    );
};

Aside.defaultProps = {
    id : 1,
    title : 'ASIDE',
    img : 'https://estaticos.elperiodico.com/resources/jpg/1/6/gato-1502194230861.jpg'
};

Aside.prototype = {
    id : PropTypes.number,
    title : PropTypes.string,
    img : PropTypes.string
};


export default Aside;