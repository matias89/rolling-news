import React, { Component, createElement } from 'react';
import Button from '../../components/button/Button';

const ArticleItem = (props) => {

    const {id, title, body} = props;    
    const ItemTitle = createElement('strong', {className: 'd-block text-gray-dark',  key:`ItemTitle-${id}`}, title);
    const ItemBody= createElement('p', {className: 'media-body pb-3 mb-0 small lh-125'}, [ItemTitle, body]);
    
    return(
        <div className="media text-muted pt-3 border-bottom border-gray d-flex justify-content-between align-items-center">
            <div>
                <title>Placeholder</title>               
                {ItemBody}
            </div>
            <div>
                <Button 
                    text="Editar"
                    type="button"
                    color="primary" 
                    onClick = {() => {console.log("Editar")}}/>
             
                <Button 
                    text="Eliminar"
                    type="button"
                    color="primary" 
                    onClick = {() => {console.log("Eliminar")}}/>
            </div>
            </div>
        );
    
}

export default ArticleItem;